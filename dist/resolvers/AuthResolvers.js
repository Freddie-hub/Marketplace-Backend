"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../context/prisma"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
require("dotenv/config");
const emailSender_1 = require("../utils/emailSender");
const crypto_1 = __importDefault(require("crypto"));
const authResolvers = {
    Mutation: {
        Login: async (_, { args }) => {
            try {
                const { email, password } = args;
                const user = await prisma_1.default.user.findUnique({
                    where: { email: email.toLowerCase().trim() },
                    include: {
                        warehouse: true,
                        managedWarehouse: true
                    }
                });
                if (!user) {
                    throw new Error("No account found with this email. Please sign up first.");
                }
                if (user.isGoogleUser && !user.password) {
                    if (!password) {
                        const token = jsonwebtoken_1.default.sign({
                            userId: user.id,
                            role: user.role,
                            warehouseId: user.warehouseId
                        }, process.env.SECRET_KEY || "make-sure-there-is-a-secret-key-in-the-application", { expiresIn: "7h" });
                        return {
                            status: "Success",
                            message: "User logged in successfully with Google",
                            token,
                            user
                        };
                    }
                    else {
                        throw new Error("This account uses Google Sign-In. Please use the Google login button.");
                    }
                }
                if (!password) {
                    if (user.isGoogleUser) {
                        throw new Error("This account uses Google Sign-In. Please use the Google login button.");
                    }
                    else {
                        throw new Error("Password is required");
                    }
                }
                const validPassword = await bcryptjs_1.default.compare(password, user.password || '');
                if (!validPassword) {
                    throw new Error("Invalid email or password");
                }
                const token = jsonwebtoken_1.default.sign({
                    userId: user.id,
                    role: user.role,
                    warehouseId: user.warehouseId
                }, process.env.SECRET_KEY || "make-sure-there-is-a-secret-key-in-the-application", { expiresIn: "7h" });
                return {
                    status: "Success",
                    message: "User logged in successfully",
                    token,
                    user
                };
            }
            catch (error) {
                console.error("An error occurred during user Login", error.message);
                throw new Error(error.message);
            }
        },
        requestPasswordReset: async (_, { args }) => {
            try {
                const { email } = args;
                const user = await prisma_1.default.user.findUnique({
                    where: { email: email.toLowerCase().trim() }
                });
                if (!user) {
                    return {
                        status: "Success",
                        message: "If an account with this email exists, you will receive a password reset link shortly"
                    };
                }
                if (user.isGoogleUser && !user.password) {
                    return {
                        status: "Success",
                        message: "If an account with this email exists, you will receive a password reset link shortly"
                    };
                }
                const resetToken = crypto_1.default.randomBytes(32).toString('hex');
                const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour
                await prisma_1.default.user.update({
                    where: { id: user.id },
                    data: {
                        resetToken,
                        resetTokenExpiry
                    }
                });
                await (0, emailSender_1.sendPasswordResetEmail)(user.email, resetToken);
                return {
                    status: "Success",
                    message: "If an account with this email exists, you will receive a password reset link shortly"
                };
            }
            catch (error) {
                console.error("Password reset request error", error.message);
                return {
                    status: "Error",
                    message: "An error occurred while processing your request. Please try again later"
                };
            }
        },
        resetPassword: async (_, { args }) => {
            try {
                const { token, newPassword, confirmPassword } = args;
                if (newPassword !== confirmPassword) {
                    throw new Error("Passwords do not match");
                }
                const user = await prisma_1.default.user.findFirst({
                    where: {
                        resetToken: token,
                        resetTokenExpiry: {
                            gt: new Date()
                        }
                    }
                });
                if (!user) {
                    throw new Error("Invalid or expired reset token");
                }
                const hashedPassword = await bcryptjs_1.default.hash(newPassword, 10);
                await prisma_1.default.user.update({
                    where: { id: user.id },
                    data: {
                        password: hashedPassword,
                        resetToken: null,
                        resetTokenExpiry: null
                    }
                });
                const authToken = jsonwebtoken_1.default.sign({
                    userId: user.id,
                    role: user.role,
                    warehouseId: user.warehouseId
                }, process.env.SECRET_KEY || "make-sure-there-is-a-secret-key-in-the-application", { expiresIn: "7h" });
                const updatedUser = await prisma_1.default.user.findUnique({
                    where: { id: user.id },
                    include: {
                        warehouse: true,
                        managedWarehouse: true
                    }
                });
                return {
                    status: "Success",
                    message: "Password reset successfully. Please Log In.",
                    token: authToken,
                    user: updatedUser
                };
            }
            catch (error) {
                console.error("Password reset error:", error.message);
                throw new Error(error.message);
            }
        }
    },
};
exports.default = authResolvers;
