import prisma from "../context/prisma";
import { InvitationResponse } from "../types/InvitationResponse";

const invitationResolvers = {
  Mutation: {
    acceptInvitation: async (_: any, { token }: { token: string }): Promise<InvitationResponse> => {
      try {
        const invitation = await prisma.invitation.findFirst({
          where: { token, tokenUsed: false, expiresAt: { gt: new Date() } },
          include: { user: true },
        });

        if (!invitation) {
          return {
            success: false,
            message: "Invalid, expired, or already used invitation token",
          };
        }

        const result = await prisma.$transaction(async (tx) => {
          await tx.invitation.update({
            where: { id: invitation.id },
            data: {
              status: "ACCEPTED",
              tokenUsed: true,
              respondedAt: new Date(),
            },
          });

          await tx.user.update({
            where: { id: invitation.userId },
            data: { status: "ACTIVE" },
          });

          await tx.activityLog.create({
            data: {
              performedById: invitation.userId,
              action: "ACCEPTED_INVITATION",
              entityType: "INVITATION",
              entityId: invitation.id,
              description: `User ${invitation.user.email} accepted invitation`,
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
      } catch (error: any) {
        console.error("Error accepting invitation:", error.message);
        return {
          success: false,
          message: `Failed to accept invitation: ${error.message}`,
        };
      }
    },

    rejectInvitation: async (_: any, { token }: { token: string }): Promise<InvitationResponse> => {
      try {
        const invitation = await prisma.invitation.findFirst({
          where: { token, tokenUsed: false, expiresAt: { gt: new Date() } },
          include: { user: true },
        });

        if (!invitation) {
          return {
            success: false,
            message: "Invalid, expired, or already used invitation token",
          };
        }

        const result = await prisma.$transaction(async (tx) => {
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
              performedById: invitation.userId,
              action: "REJECTED_INVITATION",
              entityType: "INVITATION",
              entityId: invitation.id,
              description: `User ${invitation.user.email} rejected invitation`,
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
      } catch (error: any) {
        console.error("Error rejecting invitation:", error.message);
        return {
          success: false,
          message: `Failed to reject invitation: ${error.message}`,
        };
      }
    },
  },
};

export default invitationResolvers;