-- CreateTable
CREATE TABLE "Restaurants" (
    "restId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "offer" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Restaurants_restId_key" ON "Restaurants"("restId");
