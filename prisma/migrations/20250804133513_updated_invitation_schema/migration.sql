/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `Invitation` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
ALTER TYPE "ActionType" ADD VALUE 'PAYMENT_DETAILS_UPDATED';

-- AlterTable
ALTER TABLE "ActivityLog" ALTER COLUMN "performedById" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Invitation" ADD COLUMN     "token" TEXT,
ADD COLUMN     "tokenUsed" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "senderId" DROP NOT NULL,
ALTER COLUMN "receiverId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "paymentDetails" JSONB;

-- AlterTable
ALTER TABLE "WarehouseInventory" ALTER COLUMN "recordedById" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Invitation_token_key" ON "Invitation"("token");
