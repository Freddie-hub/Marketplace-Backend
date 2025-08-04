"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../context/prisma"));
const invitationResolvers = {
    Mutation: {
        acceptInvitation: async (_, { token }) => {
            try {
                const invitation = await prisma_1.default.invitation.findFirst({
                    where: {
                        token,
                        tokenUsed: false,
                        expiresAt: { gt: new Date() },
                    },
                    include: { receiver: true },
                });
                if (!invitation || !invitation.receiver || invitation.receiverId === null) {
                    return {
                        success: false,
                        message: "Invalid, expired, or already used invitation token",
                    };
                }
                const { receiver, receiverId } = invitation;
                const result = await prisma_1.default.$transaction(async (tx) => {
                    await tx.invitation.update({
                        where: { id: invitation.id },
                        data: {
                            status: "ACCEPTED",
                            tokenUsed: true,
                            respondedAt: new Date(),
                        },
                    });
                    await tx.user.update({
                        where: { id: receiverId },
                        data: { status: "ACTIVE" },
                    });
                    await tx.activityLog.create({
                        data: {
                            performedById: receiverId,
                            action: "ACCEPTED_INVITATION",
                            entityType: "INVITATION",
                            entityId: invitation.id,
                            description: `User ${receiver.email} accepted invitation`,
                            metadata: { token },
                        },
                    });
                    return {
                        success: true,
                        message: "Invitation accepted successfully",
                        redirectUrl: "/login",
                    };
                });
                return result;
            }
            catch (error) {
                console.error("Error accepting invitation:", error.message);
                return {
                    success: false,
                    message: `Failed to accept invitation: ${error.message}`,
                };
            }
        },
        rejectInvitation: async (_, { token }) => {
            try {
                const invitation = await prisma_1.default.invitation.findFirst({
                    where: {
                        token,
                        tokenUsed: false,
                        expiresAt: { gt: new Date() },
                    },
                    include: { receiver: true },
                });
                if (!invitation || !invitation.receiver || invitation.receiverId === null) {
                    return {
                        success: false,
                        message: "Invalid, expired, or already used invitation token",
                    };
                }
                const { receiver, receiverId } = invitation;
                const result = await prisma_1.default.$transaction(async (tx) => {
                    await tx.invitation.update({
                        where: { id: invitation.id },
                        data: {
                            status: "REJECTED",
                            tokenUsed: true,
                            respondedAt: new Date(),
                        },
                    });
                    await tx.activityLog.create({
                        data: {
                            performedById: receiverId,
                            action: "REJECTED_INVITATION",
                            entityType: "INVITATION",
                            entityId: invitation.id,
                            description: `User ${receiver.email} rejected invitation`,
                            metadata: { token },
                        },
                    });
                    return {
                        success: true,
                        message: "Invitation rejected successfully",
                        redirectUrl: "/",
                    };
                });
                return result;
            }
            catch (error) {
                console.error("Error rejecting invitation:", error.message);
                return {
                    success: false,
                    message: `Failed to reject invitation: ${error.message}`,
                };
            }
        },
    },
};
exports.default = invitationResolvers;
