-- AlterTable
ALTER TABLE "Restaurants" ADD CONSTRAINT "Restaurants_pkey" PRIMARY KEY ("restId");

-- DropIndex
DROP INDEX "Restaurants_restId_key";
