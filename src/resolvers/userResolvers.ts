import prisma from "../context/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import { FarmerRegistrationArgs } from "../types/FarmerRegistrationArgs";
import { WarehouseRegistrationArgs } from "../types/WarehouseRegistrationArgs";
import { InviteFarmerInput } from "../types/InviteFarmerInput";
import sendConfirmationEmail from "./sendConfirmationEmail";
import { inviteUserEmail } from "../utils/inviteUser";
import { generatePassword } from "../utils/passwordGenerator";
import { InvitationResponse } from "../types/InvitationResponse";

const userResolvers = {
  Mutation: {
    createFarmer: async (_: any, { args }: FarmerRegistrationArgs) => {
      try {
        const {
          email,
          password,
          Fname,
          Mname,
          Lname,
          phone,
          address,
          isGoogleUser = false,
          googleId = null,
          photo,
          role = "FARMER"
        } = args;

        if (!['FARMER', 'BUYER'].includes(role)) {
          throw new Error("Invalid role for this mutation. Use 'FARMER' or 'BUYER'.");
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
          throw new Error("User with this email already exists");
        }

        if (googleId) {
          const existingGoogleUser = await prisma.user.findUnique({ where: { googleId } });
          if (existingGoogleUser) {
            throw new Error("Google account already registered");
          }
        }

        let hashedPassword = null;
        if (!isGoogleUser && password) {
          hashedPassword = await bcrypt.hash(password, 10);
        }

        const confirmationToken = crypto.randomBytes(32).toString('hex');
        const confirmationTokenExpiry = new Date();
        confirmationTokenExpiry.setHours(confirmationTokenExpiry.getHours() + 24);

        const result = await prisma.$transaction(async (tx) => {
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
            await sendConfirmationEmail({
              args: {
                email: result.email,
                firstName: result.Fname,
                lastName: result.Lname,
                confirmationToken,
              }
            });
          } catch (emailError: any) {
            console.error("Failed to send confirmation email:", emailError.message);
          }
        }

        let token = null;
        if (isGoogleUser) {
          token = jwt.sign(
            {
              userId: result.id,
              role: result.role,
              email: result.email
            },
            process.env.SECRET_KEY || "make-sure-there-is-asecret-key-in-the-application",
            { expiresIn: "7h" }
          );
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
      } catch (error: any) {
        console.log("Error while creating user:", error.message);
        throw new Error(error.message);
      }
    },

    createWarehouseWithManager: async (_: any, { args }: WarehouseRegistrationArgs) => {
      try {
        const {
          email,
          password,
          Fname,
          Mname,
          Lname,
          phone,
          address,
          isGoogleUser = false,
          googleId = null,
          photo,
          warehouse_name,
          warehouse_location,
          warehouse_address,
          warehouse_capacity,
          warehouse_phone,
          warehouse_email
        } = args;

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
          throw new Error("User with this email already exists");
        }

        if (googleId) {
          const existingGoogleUser = await prisma.user.findUnique({ where: { googleId } });
          if (existingGoogleUser) {
            throw new Error("Google account already registered");
          }
        }

        if (warehouse_email) {
          const existingWarehouse = await prisma.warehouse.findFirst({ 
            where: { email: warehouse_email } 
          });
          if (existingWarehouse) {
            throw new Error("Warehouse with this email already exists");
          }
        }

        let hashedPassword = null;
        if (!isGoogleUser && password) {
          hashedPassword = await bcrypt.hash(password, 10);
        }

        const confirmationToken = crypto.randomBytes(32).toString('hex');
        const confirmationTokenExpiry = new Date();
        confirmationTokenExpiry.setHours(confirmationTokenExpiry.getHours() + 24);

        const result = await prisma.$transaction(async (tx) => {
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
            await sendConfirmationEmail({
              args: {
                email: result.user.email,
                firstName: result.user.Fname,
                lastName: result.user.Lname,
                confirmationToken,
              }
            });
          } catch (emailError: any) {
            console.error("Failed to send confirmation email:", emailError.message);
          }
        }
        let token = null;
        if (isGoogleUser) {
          await prisma.user.update({
            where: { id: result.user.id },
            data: { status: "ACTIVE" }
          });

          token = jwt.sign(
            {
              userId: result.user.id,
              role: result.user.role,
              warehouseId: result.warehouse.id
            },
            process.env.SECRET_KEY || "make-sure-there-is-asecret-key-in-the-application",
            { expiresIn: "7h" }
          );
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
      } catch (error: any) {
        console.log("Error while creating warehouse with manager:", error.message);
        throw new Error(error.message);
      }
    },

    inviteFarmer: async (_: any, { input }: { input: InviteFarmerInput }, context: { userId?: number }): Promise<InvitationResponse> => {
      try {
        if (!context.userId) {
          throw new Error("Authentication required");
        }

        const { name, email, crops, warehouseId } = input;

        const warehouse = await prisma.warehouse.findUnique({
          where: { id: warehouseId },
          include: { manager: true }
        });

        if (!warehouse) {
          throw new Error("Warehouse not found");
        }

        if (warehouse.managerId !== context.userId || warehouse.manager.role !== "WAREHOUSE_GUY") {
          throw new Error("Only warehouse managers can invite farmers");
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
          throw new Error("User with this email already exists");
        }

        const { plainPassword, hashedPassword } = await generatePassword();
        const invitationToken = uuidv4();
        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + 24);

        const result = await prisma.$transaction(async (tx) => {
          const newUser = await tx.user.create({
            data: {
              email,
              password: hashedPassword,
              Fname: name,
              Lname: "",
              phone: warehouse.phone,
              address: warehouse.address,
              role: "FARMER",
              status: "INACTIVE",
              isGoogleUser: false,
              warehouseId,
              createdById: context.userId,
              emailVerified: false,
            }
          });

          const invitation = await tx.invitation.create({
            data: {
              senderId: context.userId,
              receiverId: newUser.id,
              warehouseId,
              status: "PENDING",
              token: invitationToken,
              tokenUsed: false,
              expiresAt,
              message: `Invitation to join ${warehouse.name} as a farmer`
            }
          });

          const createdProducts = await Promise.all(
            crops.map(async (crop) => {
              const product = await tx.products.create({
                data: {
                  name: crop.name,
                  grade: "Standard",
                  quantity: crop.quantity,
                  price: 0,
                  variety: "Unknown",
                  location: warehouse.location,
                  farmerId: newUser.id,
                  warehouseId,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                }
              });

              await tx.warehouseInventory.create({
                data: {
                  productId: product.id,
                  warehouseId,
                  quantityIn: crop.quantity,
                  currentStock: crop.quantity,
                  movementType: "IN",
                  recordedById: context.userId,
                  createdAt: new Date(),
                }
              });

              return product;
            })
          );

          await tx.activityLog.create({
            data: {
              performedById: context.userId,
              action: "INVITED",
              entityType: "USER",
              entityId: newUser.id,
              description: `Warehouse manager invited farmer ${email} to ${warehouse.name}`,
              metadata: {
                warehouseId,
                warehouseName: warehouse.name,
                crops: crops.map(crop => ({ name: crop.name, quantity: crop.quantity }))
              }
            }
          });

          return { newUser, invitation, createdProducts };
        });

        try {
          await inviteUserEmail({
            args: {
              email: result.newUser.email,
              firstName: result.newUser.Fname,
              lastName: result.newUser.Lname,
              role: "FARMER",
              password: plainPassword,
              warehouseName: warehouse.name,
              warehouseLocation: warehouse.location,
              warehouseAddress: warehouse.address,
              crops,
              invitationToken
            }
          });
        } catch (emailError: any) {
          console.error("Failed to send invitation email:", emailError.message);
        }

        return {
          success: true,
          message: "Farmer invited successfully. An invitation email has been sent."
        };
      } catch (error: any) {
        console.error("Error inviting farmer:", error.message);
        return {
          success: false,
          message: `Failed to invite farmer: ${error.message}`
        };
      }
    }
  }
};

export default userResolvers;