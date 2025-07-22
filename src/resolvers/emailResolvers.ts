import prisma from "../context/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { FarmerRegistrationArgs } from "../types/FarmerRegistrationArgs";
import { WarehouseRegistrationArgs } from "../types/WarehouseRegistrationArgs";
import { GoogleSignupArgs } from "../types/GoogleSignupArgs";
import { InvitationArgs } from "../types/InvitationArgs";
import { inviteUserEmail } from "../utils/inviteUser";
import sendConfirmationEmail from "./sendConfirmationEmail";

const emailResolvers={
    Mutation:{
        confirmEmail: async (_: any, { token }: { token: string }) => {
            try {
              const user = await prisma.user.findFirst({
                where: {
                  emailConfirmationToken: token,
                  emailConfirmationTokenExpiry: {
                    gte: new Date()
                  }
                }
              });
      
              if (!user) {
                throw new Error("Invalid or expired confirmation token");
              }
      
              const result = await prisma.$transaction(async (tx) => {
                const updatedUser = await tx.user.update({
                  where: { id: user.id },
                  data: {
                    status: "ACTIVE",
                    emailVerified: true,
                    emailConfirmationToken: null,
                    emailConfirmationTokenExpiry: null,
                  }
                });
      
                await tx.activityLog.create({
                  data: {
                    performedById: user.id,
                    action: "ACTIVATED",
                    entityType: "USER",
                    entityId: user.id,
                    description: `${user.Fname} ${user.Lname} confirmed email and activated account`,
                    metadata: {
                      emailVerified: true,
                      activatedAt: new Date()
                    }
                  }
                });
      
                return updatedUser;
              });
      
              const authToken = jwt.sign(
                {
                  userId: result.id,
                  role: result.role,
                  email: result.email
                },
                process.env.SECRET_KEY || "make-sure-there-is-asecret-key-in-the-application",
                { expiresIn: "7h" }
              );
      
              return {
                status: "Success",
                message: "Email confirmed successfully! Your account is now active.",
                token: authToken,
                user: result
              };
            } catch (error: any) {
              console.log("Email confirmation error:", error.message);
              throw new Error(error.message);
            }
          },
          resendConfirmationEmail: async (_: any, { email }: { email: string }) => {
            try {
              const user = await prisma.user.findUnique({
                where: { email }
              });
      
              if (!user) {
                throw new Error("User not found");
              }
      
              if (user.emailVerified) {
                throw new Error("Email is already verified");
              }
      
              if (user.isGoogleUser) {
                throw new Error("Google users don't need email confirmation");
              }
      
              const confirmationToken = crypto.randomBytes(32).toString('hex');
              const confirmationTokenExpiry = new Date();
              confirmationTokenExpiry.setHours(confirmationTokenExpiry.getHours() + 24);
      
              await prisma.user.update({
                where: { id: user.id },
                data: {
                  emailConfirmationToken: confirmationToken,
                  emailConfirmationTokenExpiry: confirmationTokenExpiry,
                }
              });
      
              await sendConfirmationEmail({
                args: {
                  email: user.email,
                  firstName: user.Fname,
                  lastName: user.Lname,
                  confirmationToken,
                }
              });
      
              await prisma.activityLog.create({
                data: {
                  performedById: user.id,
                  action: "UPDATED",
                  entityType: "USER",
                  entityId: user.id,
                  description: `Resent email confirmation to ${user.Fname} ${user.Lname}`,
                  metadata: {
                    action: "resend_confirmation_email"
                  }
                }
              });
      
              return {
                status: "Success",
                message: "Confirmation email sent successfully. Please check your email."
              };
            } catch (error: any) {
              console.log("Resend confirmation email error:", error.message);
              throw new Error(error.message);
            }
          },
          inviteFarmerToWarehouse: async (_: any, args: InvitationArgs, context: any) => {
            try {
              const { receiverEmail, warehouseId, message, expiresInDays = 7 } = args.args;
              
              const currentUserId = context.userId;
              const currentUser = await prisma.user.findUnique({ where: { id: currentUserId } });
              
              if (!currentUser) {
                throw new Error("Unauthorized");
              }
      
              if (currentUser.role !== 'WAREHOUSE_GUY' && currentUser.role !== 'ADMINISTRATOR') {
                throw new Error("Only warehouse managers and administrators can send invitations");
              }
      
              const warehouse = await prisma.warehouse.findUnique({ 
                where: { id: warehouseId },
                include: { manager: true }
              });
      
              if (!warehouse) {
                throw new Error("Warehouse not found");
              }
      
              if (currentUser.role === 'WAREHOUSE_GUY' && warehouse.managerId !== currentUserId) {
                throw new Error("You can only send invitations for your own warehouse");
              }
      
              const receiver = await prisma.user.findUnique({ where: { email: receiverEmail } });
              if (!receiver) {
                throw new Error("User with this email not found");
              }
      
              if (receiver.role !== 'FARMER') {
                throw new Error("Can only invite farmers to warehouses");
              }
      
              if (receiver.warehouseId) {
                throw new Error("Farmer is already assigned to a warehouse");
              }
      
              const existingInvitation = await prisma.invitation.findFirst({
                where: {
                  receiverId: receiver.id,
                  warehouseId: warehouseId,
                  status: 'PENDING'
                }
              });
      
              if (existingInvitation) {
                throw new Error("Pending invitation already exists for this farmer");
              }
      
              const expiresAt = new Date();
              expiresAt.setDate(expiresAt.getDate() + expiresInDays);
      
              const result = await prisma.$transaction(async (tx) => {
                const invitation = await tx.invitation.create({
                  data: {
                    senderId: currentUserId,
                    receiverId: receiver.id,
                    warehouseId: warehouseId,
                    message: message || `You've been invited to join ${warehouse.name} warehouse`,
                    expiresAt: expiresAt
                  },
                  include: {
                    sender: true,
                    receiver: true,
                    warehouse: true
                  }
                });
      
                await tx.activityLog.create({
                  data: {
                    performedById: currentUserId,
                    targetUserId: receiver.id,
                    action: "INVITED",
                    entityType: "INVITATION",
                    entityId: invitation.id,
                    description: `${currentUser.Fname} ${currentUser.Lname} invited ${receiver.Fname} ${receiver.Lname} to join ${warehouse.name} warehouse`,
                    metadata: {
                      warehouseId: warehouseId,
                      warehouseName: warehouse.name,
                      expiresAt: expiresAt
                    }
                  }
                });
      
                return invitation;
              });
      
              return {
                status: "Success",
                message: "Farmer invitation sent successfully",
                invitation: result
              };
            } catch (error: any) {
              console.log("Error sending invitation:", error.message);
              throw new Error(error.message);
            }
          }
    }
}

export default emailResolvers