"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productResolvers = void 0;
const prisma_1 = __importDefault(require("../context/prisma"));
const generateImageUrl_1 = __importDefault(require("../utils/generateImageUrl"));
exports.productResolvers = {
    Mutation: {
        createProduct: async (_, { args }, context) => {
            try {
                if (!context.user || !context.user.role) {
                    throw new Error("Not Authenticated, Please Login");
                }
                if (context.user.role === "BUYER") {
                    throw new Error("Not Authorized to add products");
                }
                const { name, grade, quantity, price, variety, location, image, description, farmerId, warehouseId } = args;
                if (!name || !grade || !quantity || !price || !variety || !location || !farmerId || !warehouseId) {
                    throw new Error("Name, grade, quantity, price, variety, location, farmerId, and warehouseId are required");
                }
                const farmer = await prisma_1.default.user.findUnique({
                    where: { id: farmerId },
                    include: { warehouse: true }
                });
                if (!farmer) {
                    throw new Error("Invalid farmer ID");
                }
                if (farmer.role !== 'FARMER') {
                    throw new Error("User must have FARMER role to create products");
                }
                const warehouse = await prisma_1.default.warehouse.findUnique({
                    where: { id: warehouseId }
                });
                if (!warehouse) {
                    throw new Error("Invalid warehouse ID");
                }
                if (farmer.warehouseId && farmer.warehouseId !== warehouseId) {
                    throw new Error("Farmer is not assigned to this warehouse");
                }
                let imageUrl = null;
                if (image) {
                    try {
                        imageUrl = await (0, generateImageUrl_1.default)(context.req, image);
                    }
                    catch (imageError) {
                        console.error("Image upload failed:", imageError);
                        imageUrl = null;
                    }
                }
                const product = await prisma_1.default.products.create({
                    data: {
                        name,
                        grade,
                        quantity,
                        price,
                        variety,
                        location,
                        image: imageUrl,
                        description,
                        farmerId,
                        warehouseId
                    },
                    include: {
                        farmer: true,
                        warehouse: true
                    }
                });
                await prisma_1.default.warehouseInventory.create({
                    data: {
                        productId: product.id,
                        warehouseId: warehouseId,
                        quantityIn: quantity,
                        currentStock: quantity,
                        movementType: 'IN',
                        reason: 'Initial product creation',
                        recordedById: farmerId
                    }
                });
                return {
                    status: "Success",
                    message: "Product successfully created",
                    product
                };
            }
            catch (error) {
                console.error("Error during product creation", error.message);
                throw new Error(error.message);
            }
        },
        updateProduct: async (_, { id, args }, context) => {
            try {
                const { name, grade, quantity, price, variety, location, image, description } = args;
                const existingProduct = await prisma_1.default.products.findUnique({
                    where: { id },
                    include: { farmer: true }
                });
                if (!existingProduct) {
                    throw new Error("Product not found");
                }
                let imageUrl = existingProduct.image;
                if (image) {
                    try {
                        imageUrl = await (0, generateImageUrl_1.default)(context.req, image);
                    }
                    catch (imageError) {
                        console.error("Image upload failed:", imageError);
                        imageUrl = existingProduct.image;
                    }
                }
                const updatedProduct = await prisma_1.default.products.update({
                    where: { id },
                    data: {
                        ...(name && { name }),
                        ...(grade && { grade }),
                        ...(quantity && { quantity }),
                        ...(price && { price }),
                        ...(variety && { variety }),
                        ...(location && { location }),
                        ...(image && { image: imageUrl }),
                        ...(description && { description })
                    },
                    include: {
                        farmer: true,
                        warehouse: true
                    }
                });
                if (quantity && quantity !== existingProduct.quantity) {
                    const quantityDiff = quantity - existingProduct.quantity;
                    const movementType = quantityDiff > 0 ? 'IN' : 'OUT';
                    await prisma_1.default.warehouseInventory.upsert({
                        where: {
                            productId_warehouseId: {
                                productId: id,
                                warehouseId: existingProduct.warehouseId
                            }
                        },
                        update: {
                            currentStock: quantity,
                            ...(quantityDiff > 0 ? { quantityIn: Math.abs(quantityDiff) } : { quantityOut: Math.abs(quantityDiff) }),
                            movementType,
                            reason: 'Product quantity updated',
                            recordedById: existingProduct.farmerId
                        },
                        create: {
                            productId: id,
                            warehouseId: existingProduct.warehouseId,
                            currentStock: quantity,
                            ...(quantityDiff > 0 ? { quantityIn: Math.abs(quantityDiff) } : { quantityOut: Math.abs(quantityDiff) }),
                            movementType,
                            reason: 'Product quantity updated',
                            recordedById: existingProduct.farmerId
                        }
                    });
                }
                return {
                    status: "Success",
                    message: "Product successfully updated",
                    product: updatedProduct
                };
            }
            catch (error) {
                console.error("Error during product update", error.message);
                throw new Error(error.message);
            }
        },
        deleteProduct: async (_, { id }) => {
            try {
                const product = await prisma_1.default.products.findUnique({ where: { id } });
                if (!product) {
                    throw new Error("Product not found");
                }
                await prisma_1.default.warehouseInventory.deleteMany({
                    where: { productId: id }
                });
                await prisma_1.default.products.delete({ where: { id } });
                return {
                    status: "Success",
                    message: "Product successfully deleted"
                };
            }
            catch (error) {
                console.error("Error during product deletion", error.message);
                throw new Error(error.message);
            }
        }
    },
    Query: {
        AllProducts: async (_, {}) => {
            try {
                const products = await prisma_1.default.products.findMany({
                    include: {
                        farmer: {
                            select: {
                                id: true,
                                email: true,
                                Fname: true,
                                Mname: true,
                                Lname: true,
                                phone: true,
                                role: true
                            }
                        },
                        warehouse: {
                            select: {
                                id: true,
                                name: true,
                                location: true,
                                address: true
                            }
                        },
                        inventoryMovements: {
                            orderBy: { createdAt: 'desc' },
                            take: 1
                        }
                    },
                    orderBy: { createdAt: 'desc' }
                });
                return {
                    status: "Success",
                    message: "Products successfully retrieved",
                    products
                };
            }
            catch (error) {
                console.error("Error while fetching products", error.message);
                throw new Error("Error while fetching products");
            }
        },
        ProductById: async (_, { id }) => {
            try {
                const product = await prisma_1.default.products.findUnique({
                    where: { id },
                    include: {
                        farmer: {
                            select: {
                                id: true,
                                email: true,
                                Fname: true,
                                Mname: true,
                                Lname: true,
                                phone: true,
                                role: true
                            }
                        },
                        warehouse: {
                            select: {
                                id: true,
                                name: true,
                                location: true,
                                address: true
                            }
                        },
                        inventoryMovements: {
                            include: {
                                recordedBy: {
                                    select: {
                                        id: true,
                                        Fname: true,
                                        Lname: true
                                    }
                                }
                            },
                            orderBy: { createdAt: 'desc' }
                        },
                        payments: {
                            include: {
                                processedBy: {
                                    select: {
                                        id: true,
                                        Fname: true,
                                        Lname: true
                                    }
                                }
                            },
                            orderBy: { createdAt: 'desc' }
                        }
                    }
                });
                if (!product) {
                    throw new Error("Product not found");
                }
                return {
                    status: "Success",
                    message: "Product successfully retrieved",
                    product
                };
            }
            catch (error) {
                console.error("Error while fetching product", error.message);
                throw new Error("Error while fetching product");
            }
        },
        ProductsByFarmer: async (_, { farmerId }) => {
            try {
                const products = await prisma_1.default.products.findMany({
                    where: { farmerId },
                    include: {
                        farmer: {
                            select: {
                                id: true,
                                email: true,
                                Fname: true,
                                Mname: true,
                                Lname: true,
                                phone: true
                            }
                        },
                        warehouse: {
                            select: {
                                id: true,
                                name: true,
                                location: true
                            }
                        },
                        inventoryMovements: {
                            orderBy: { createdAt: 'desc' },
                            take: 1
                        }
                    },
                    orderBy: { createdAt: 'desc' }
                });
                return {
                    status: "Success",
                    message: "Farmer products successfully retrieved",
                    products
                };
            }
            catch (error) {
                console.error("Error while fetching farmer products", error.message);
                throw new Error("Error while fetching farmer products");
            }
        },
        ProductsByWarehouse: async (_, { warehouseId }) => {
            try {
                const products = await prisma_1.default.products.findMany({
                    where: { warehouseId },
                    include: {
                        farmer: {
                            select: {
                                id: true,
                                email: true,
                                Fname: true,
                                Mname: true,
                                Lname: true,
                                phone: true
                            }
                        },
                        warehouse: {
                            select: {
                                id: true,
                                name: true,
                                location: true
                            }
                        },
                        inventoryMovements: {
                            orderBy: { createdAt: 'desc' },
                            take: 1
                        }
                    },
                    orderBy: { createdAt: 'desc' }
                });
                return {
                    status: "Success",
                    message: "Warehouse products successfully retrieved",
                    products
                };
            }
            catch (error) {
                console.error("Error while fetching warehouse products", error.message);
                throw new Error("Error while fetching warehouse products");
            }
        }
    }
};
