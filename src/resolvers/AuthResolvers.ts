import prisma from "../context/prisma";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import 'dotenv/config'
import { LoginTypes } from "../types/LoginTypes";
import ResetPasswordArgs from "../types/ResetPasswordArgs";
import { sendPasswordResetEmail } from "../utils/emailSender";
import crypto from "crypto"
import RequestPasswordResetArgs from "../types/RequestPasswordResetArgs";

const authResolvers = {
    Mutation: {
        Login: async (_: any, { args }: LoginTypes) => {
            try {
                const { email, password } = args;
                
                const user = await prisma.user.findUnique({
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
                        const token = jwt.sign(
                            { 
                                userId: user.id, 
                                role: user.role, 
                                warehouseId: user.warehouseId 
                            },
                            process.env.SECRET_KEY || "make-sure-there-is-a-secret-key-in-the-application",
                            { expiresIn: "7h" }
                        );
                        
                        return {
                            status: "Success",
                            message: "User logged in successfully with Google",
                            token, 
                            user
                        }
                    } else {
                        throw new Error("This account uses Google Sign-In. Please use the Google login button.");
                    }
                }
                
                if (!password) {
                    if (user.isGoogleUser) {
                        throw new Error("This account uses Google Sign-In. Please use the Google login button.");
                    } else {
                        throw new Error("Password is required");
                    }
                }
                
                const validPassword = await bcrypt.compare(password, user.password || '');
                if (!validPassword) {
                    throw new Error("Invalid email or password");
                }
                
                const token = jwt.sign(
                    { 
                        userId: user.id, 
                        role: user.role, 
                        warehouseId: user.warehouseId 
                    }, 
                    process.env.SECRET_KEY || "make-sure-there-is-a-secret-key-in-the-application",
                    { expiresIn: "7h" }
                );
                
                return {
                    status: "Success",
                    message: "User logged in successfully",
                    token, 
                    user
                }
                
            } catch (error: any) {
                console.error("An error occurred during user Login", error.message)
                throw new Error(error.message)
            }
        },
        
        requestPasswordReset: async (_: any, { args }: RequestPasswordResetArgs) => {
            try {
                const { email } = args
                const user = await prisma.user.findUnique({
                    where: { email: email.toLowerCase().trim() }
                })
                
                if (!user) {
                    return {
                        status: "Success",
                        message: "If an account with this email exists, you will receive a password reset link shortly"
                    }
                }
                
                if (user.isGoogleUser && !user.password) {
                    return {
                        status: "Success",
                        message: "If an account with this email exists, you will receive a password reset link shortly"
                    }
                }
                
                const resetToken = crypto.randomBytes(32).toString('hex')
                const resetTokenExpiry = new Date(Date.now() + 3600000) // 1 hour
                
                await prisma.user.update({
                    where: { id: user.id }, 
                    data: {
                        resetToken, 
                        resetTokenExpiry
                    }
                })
                
                await sendPasswordResetEmail(user.email, resetToken)
                
                return {
                    status: "Success",
                    message: "If an account with this email exists, you will receive a password reset link shortly"
                }
            } catch (error: any) {
                console.error("Password reset request error", error.message)
                return {
                    status: "Error",
                    message: "An error occurred while processing your request. Please try again later"
                }
            }
        },
        
        resetPassword: async (_: any, { args }: ResetPasswordArgs) => {
            try {
                const {token, newPassword, confirmPassword } = args
                if (newPassword !== confirmPassword) {
                    throw new Error("Passwords do not match")
                }
                
                const user = await prisma.user.findFirst({
                    where: {
                        resetToken: token,
                        resetTokenExpiry: {
                            gt: new Date()
                        }
                    }
                })
                
                if (!user) {
                    throw new Error("Invalid or expired reset token")
                }
                
                const hashedPassword = await bcrypt.hash(newPassword, 10)
                
                await prisma.user.update({
                    where: { id: user.id }, 
                    data: {
                        password: hashedPassword,
                        resetToken: null,
                        resetTokenExpiry: null
                    }
                })
                
                const authToken = jwt.sign(
                    { 
                        userId: user.id, 
                        role: user.role, 
                        warehouseId: user.warehouseId 
                    }, 
                    process.env.SECRET_KEY || "make-sure-there-is-a-secret-key-in-the-application", 
                    { expiresIn: "7h" }
                )
                
                const updatedUser = await prisma.user.findUnique({
                    where: { id: user.id }, 
                    include: { 
                        warehouse: true,
                        managedWarehouse: true 
                    }
                })
                
                return {
                    status: "Success",
                    message: "Password reset successfully. Please Log In.",
                    token: authToken,
                    user: updatedUser
                }
            } catch (error: any) {
                console.error("Password reset error:", error.message)
                throw new Error(error.message)
            }
        }
    },
}

export default authResolvers