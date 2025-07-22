import prisma from "../context/prisma";
import jwt from "jsonwebtoken";
import { GoogleSignupArgs } from "../types/GoogleSignupArgs";

const googleResolvers={
    Mutation:{
        GoogleSignup: async (_: any, args: GoogleSignupArgs) => {
            try {
              const {
                warehouse_name,
                warehouse_location,
                warehouse_address,
                warehouse_capacity,
                warehouse_phone,
                warehouse_email,
                googleUserData,
                role
              } = args.args;
      
              const { email, Fname, googleId, photo } = googleUserData;
              const Lname = googleUserData.Lname || "Unknown";
      
              const existingUser = await prisma.user.findUnique({ where: { email } });
              if (existingUser) {
                throw new Error("User with this email already exists");
              }
      
              const existingGoogleUser = await prisma.user.findUnique({ where: { googleId } });
              if (existingGoogleUser) {
                throw new Error("Google account already registered");
              }
      
              if (role === 'WAREHOUSE_GUY' && warehouse_email) {
                const existingWarehouse = await prisma.warehouse.findFirst({ 
                  where: { email: warehouse_email } 
                });
                if (existingWarehouse) {
                  throw new Error("Warehouse with this email already exists");
                }
              }
      
              const result = await prisma.$transaction(async (tx) => {
                const newUser = await tx.user.create({
                  data: {
                    email,
                    Fname,
                    Lname,
                    photo,
                    role: role,
                    status: "ACTIVE",
                    isGoogleUser: true,
                    googleId,
                    emailVerified: true,
                  }
                });
      
                let warehouse = null;
                if (role === 'WAREHOUSE_GUY' && warehouse_name && warehouse_location) {
                  warehouse = await tx.warehouse.create({
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
                      entityType: "WAREHOUSE",
                      entityId: warehouse.id,
                      description: `Warehouse ${warehouse_name} created via Google signup`,
                      metadata: {
                        location: warehouse_location,
                        capacity: warehouse_capacity
                      }
                    }
                  });
                }
      
                await tx.activityLog.create({
                  data: {
                    performedById: newUser.id,
                    action: "CREATED",
                    entityType: "USER",
                    entityId: newUser.id,
                    description: `${role} ${Fname} ${Lname} registered via Google`,
                    metadata: {
                      registrationType: "google",
                      role: role,
                      warehouseId: warehouse?.id,
                      emailVerified: true
                    }
                  }
                });
      
                return { user: newUser, warehouse };
              });
      
              const token = jwt.sign(
                {
                  userId: result.user.id,
                  role: result.user.role,
                  warehouseId: result.warehouse?.id
                },
                process.env.SECRET_KEY || "make-sure-there-is-asecret-key-in-the-application",
                { expiresIn: "7h" }
              );
      
              return {
                status: "Success",
                message: `${role} registered successfully via Google Account`,
                token,
                user: {
                  ...result.user,
                  warehouse: result.warehouse
                }
              };
            } catch (error: any) {
              console.log("Google Signup Error:", error.message);
              throw new Error(error.message);
            }
          },
    }
}

export default googleResolvers