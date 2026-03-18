-- CreateTable
CREATE TABLE "Students" (
    "rollno" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "bloodgrp" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Students_rollno_key" ON "Students"("rollno");
