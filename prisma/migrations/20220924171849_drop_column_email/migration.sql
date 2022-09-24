/*
  Warnings:

  - You are about to drop the column `email` on the `client` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "client_email_key";

-- AlterTable
ALTER TABLE "client" DROP COLUMN "email";
