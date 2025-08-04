-- CreateTable
CREATE TABLE "TyType" (
    "id" SERIAL NOT NULL,
    "entityId" INTEGER,
    "description" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TyType_pkey" PRIMARY KEY ("id")
);
