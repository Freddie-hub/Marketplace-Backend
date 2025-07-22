"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../context/prisma"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
const sendConfirmationEmail_1 = __importDefault(require("./sendConfirmationEmail"));
const userResolvers = {
    Mutation: {
        createFarmer: async (_, { args }) => {
            try {
                const { email, password, Fname, Mname, Lname, phone, address, isGoogleUser = false, googleId = null, photo, role = "FARMER" } = args;
                if (!['FARMER', 'BUYER'].includes(role)) {
                    throw new Error("Invalid role for this mutation. Use 'FARMER' or 'BUYER'.");
                }
                const existingUser = await prisma_1.default.user.findUnique({ where: { email } });
                if (existingUser) {
                    throw new Error("User with this email already exists");
                }
                if (googleId) {
                    const existingGoogleUser = await prisma_1.default.user.findUnique({ where: { googleId } });
                    if (existingGoogleUser) {
                        throw new Error("Google account already registered");
                    }
                }
                let hashedPassword = null;
                if (!isGoogleUser && password) {
                    hashedPassword = await bcryptjs_1.default.hash(password, 10);
                }
                const confirmationToken = crypto_1.default.randomBytes(32).toString('hex');
                const confirmationTokenExpiry = new Date();
                confirmationTokenExpiry.setHours(confirmationTokenExpiry.getHours() + 24);
                const result = await prisma_1.default.$transaction(async (tx) => {
                    const newUser = await tx.user.create({
                        data: {
                            email,
                            password: hashedPassword,
                            Fname,
                            Mname,
                            Lname,
                            phone,
                            address,
                            photo,
                            role,
                            status: "INACTIVE",
                            isGoogleUser,
                            googleId,
                            emailConfirmationToken: confirmationToken,
                            emailConfirmationTokenExpiry: confirmationTokenExpiry,
                            emailVerified: isGoogleUser,
                        }
                    });
                    await tx.activityLog.create({
                        data: {
                            performedById: newUser.id,
                            action: "CREATED",
                            entityType: "USER",
                            entityId: newUser.id,
                            description: `${role} ${Fname} ${Lname} registered successfully - awaiting email confirmation`,
                            metadata: {
                                registrationType: isGoogleUser ? "google" : "email",
                                role,
                                emailVerified: isGoogleUser
                            }
                        }
                    });
                    return newUser;
                });
                if (!isGoogleUser) {
                    try {
                        await (0, sendConfirmationEmail_1.default)({
                            args: {
                                email: result.email,
                                firstName: result.Fname,
                                lastName: result.Lname,
                                confirmationToken,
                            }
                        });
                    }
                    catch (emailError) {
                        console.error("Failed to send confirmation email:", emailError.message);
                    }
                }
                let token = null;
                if (isGoogleUser) {
                    token = jsonwebtoken_1.default.sign({
                        userId: result.id,
                        role: result.role,
                        email: result.email
                    }, process.env.SECRET_KEY || "make-sure-there-is-asecret-key-in-the-application", { expiresIn: "7h" });
                }
                return {
                    status: "Success",
                    message: isGoogleUser
                        ? `${role} registered successfully.`
                        : "Registration successful! Please check your email and click the confirmation link to activate your account.",
                    token,
                    user: result,
                    requiresEmailConfirmation: !isGoogleUser
                };
            }
            catch (error) {
                console.log("Error while creating user:", error.message);
                throw new Error(error.message);
            }
        },
        createWarehouseWithManager: async (_, { args }) => {
            try {
                const { email, password, Fname, Mname, Lname, phone, address, isGoogleUser = false, googleId = null, photo, warehouse_name, warehouse_location, warehouse_address, warehouse_capacity, warehouse_phone, warehouse_email } = args;
                const existingUser = await prisma_1.default.user.findUnique({ where: { email } });
                if (existingUser) {
                    throw new Error("User with this email already exists");
                }
                if (googleId) {
                    const existingGoogleUser = await prisma_1.default.user.findUnique({ where: { googleId } });
                    if (existingGoogleUser) {
                        throw new Error("Google account already registered");
                    }
                }
                if (warehouse_email) {
                    const existingWarehouse = await prisma_1.default.warehouse.findFirst({
                        where: { email: warehouse_email }
                    });
                    if (existingWarehouse) {
                        throw new Error("Warehouse with this email already exists");
                    }
                }
                let hashedPassword = null;
                if (!isGoogleUser && password) {
                    hashedPassword = await bcryptjs_1.default.hash(password, 10);
                }
                const confirmationToken = crypto_1.default.randomBytes(32).toString('hex');
                const confirmationTokenExpiry = new Date();
                confirmationTokenExpiry.setHours(confirmationTokenExpiry.getHours() + 24);
                const result = await prisma_1.default.$transaction(async (tx) => {
                    const newUser = await tx.user.create({
                        data: {
                            email,
                            password: hashedPassword,
                            Fname,
                            Mname,
                            Lname,
                            phone,
                            address,
                            photo,
                            role: "WAREHOUSE_GUY",
                            status: "INACTIVE",
                            isGoogleUser,
                            googleId,
                            emailConfirmationToken: confirmationToken,
                            emailConfirmationTokenExpiry: confirmationTokenExpiry,
                            emailVerified: isGoogleUser,
                        }
                    });
                    const newWarehouse = await tx.warehouse.create({
                        data: {
                            name: warehouse_name,
                            location: warehouse_location,
                            address: warehouse_address,
                            capacity: warehouse_capacity,
                            phone: warehouse_phone,
                            email: warehouse_email,
                            managerId: newUser.id
                        },
                        include: {
                            manager: true,
                            farmers: true,
                            _count: {
                                select: { farmers: true }
                            }
                        }
                    });
                    await tx.activityLog.create({
                        data: {
                            performedById: newUser.id,
                            action: "CREATED",
                            entityType: "USER",
                            entityId: newUser.id,
                            description: `Warehouse manager ${Fname} ${Lname} registered with warehouse ${warehouse_name} - awaiting email confirmation`,
                            metadata: {
                                registrationType: isGoogleUser ? "google" : "email",
                                role: "WAREHOUSE_GUY",
                                warehouseId: newWarehouse.id,
                                warehouseName: warehouse_name,
                                emailVerified: isGoogleUser
                            }
                        }
                    });
                    await tx.activityLog.create({
                        data: {
                            performedById: newUser.id,
                            action: "CREATED",
                            entityType: "WAREHOUSE",
                            entityId: newWarehouse.id,
                            description: `Warehouse ${warehouse_name} created`,
                            metadata: {
                                location: warehouse_location,
                                capacity: warehouse_capacity
                            }
                        }
                    });
                    return { user: newUser, warehouse: newWarehouse };
                });
                if (!isGoogleUser) {
                    try {
                        await (0, sendConfirmationEmail_1.default)({
                            args: {
                                email: result.user.email,
                                firstName: result.user.Fname,
                                lastName: result.user.Lname,
                                confirmationToken,
                            }
                        });
                    }
                    catch (emailError) {
                        console.error("Failed to send confirmation email:", emailError.message);
                    }
                }
                let token = null;
                if (isGoogleUser) {
                    await prisma_1.default.user.update({
                        where: { id: result.user.id },
                        data: { status: "ACTIVE" }
                    });
                    token = jsonwebtoken_1.default.sign({
                        userId: result.user.id,
                        role: result.user.role,
                        warehouseId: result.warehouse.id
                    }, process.env.SECRET_KEY || "make-sure-there-is-asecret-key-in-the-application", { expiresIn: "7h" });
                }
                return {
                    status: "Success",
                    message: isGoogleUser
                        ? "Warehouse and manager created successfully"
                        : "Registration successful! Please check your email and click the confirmation link to activate your account.",
                    token,
                    user: {
                        ...result.user,
                        warehouse: result.warehouse
                    },
                    requiresEmailConfirmation: !isGoogleUser
                };
            }
            catch (error) {
                console.log("Error while creating warehouse with manager:", error.message);
                throw new Error(error.message);
            }
        },
    }
};
exports.default = userResolvers;
