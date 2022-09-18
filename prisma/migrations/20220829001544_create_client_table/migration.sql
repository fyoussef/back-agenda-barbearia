/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "reservation" DROP CONSTRAINT "reservation_id_user_fkey";

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "client_phone_key" ON "client"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "client_email_key" ON "client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "client_name_phone_key" ON "client"("name", "phone");

-- AddForeignKey
ALTER TABLE "reservation" ADD CONSTRAINT "reservation_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
