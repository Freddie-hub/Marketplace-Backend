"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../context/prisma"));
const apollo_server_errors_1 = require("apollo-server-errors");
const farmerResolvers = {
    Mutation: {
        updateFarmerPaymentDetails: async (_, { mpesaNumber }, context) => {
            try {
                if (!context.userId) {
                    throw new apollo_server_errors_1.AuthenticationError("User not authenticated");
                }
                const user = await prisma_1.default.user.findUnique({
                    where: { id: context.userId },
                });
                if (!user || user.role !== "FARMER") {
                    return {
                        success: false,
                        message: "User not found or not a farmer",
                    };
                }
                // Validate Mpesa number (10-digit Kenyan number starting with 07)
                const mpesaRegex = /^07\d{8}$/;
                if (!mpesaRegex.test(mpesaNumber)) {
                    return {
                        success: false,
                        message: "Invalid Mpesa number. Must be a 10-digit number starting with 07.",
                    };
                }
                const result = await prisma_1.default.$transaction(async (tx) => {
                    const updatedUser = await tx.user.update({
                        where: { id: context.userId },
                        data: {
                            paymentDetails: { mpesaNumber },
                        },
                    });
                    await tx.activityLog.create({
                        data: {
                            performedById: context.userId,
                            action: "PAYMENT_DETAILS_UPDATED",
                            entityType: "USER",
                            entityId: context.userId,
                            description: `Farmer ${updatedUser.email} updated payment details`,
                            metadata: { mpesaNumber },
                        },
                    });
                    return {
                        success: true,
                        message: "Payment details updated successfully",
                    };
                });
                return result;
            }
            catch (error) {
                console.error("Error updating payment details:", error.message);
                return {
                    success: false,
                    message: `Failed to update payment details: ${error.message}`,
                };
            }
        },
    },
};
exports.default = farmerResolvers;
