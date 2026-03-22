-- CreateTable
CREATE TABLE "Users" (
    "userId" TEXT NOT NULL,
    "email_id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "mobNumber" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_userId_key" ON "Users"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_id_key" ON "Users"("email_id");
