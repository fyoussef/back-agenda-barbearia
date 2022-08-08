/*
  Warnings:

  - A unique constraint covering the columns `[name,phone]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_name_phone_key" ON "user"("name", "phone");
