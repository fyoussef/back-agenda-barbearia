/*
  Warnings:

  - You are about to drop the column `id_user` on the `reservation` table. All the data in the column will be lost.
  - Added the required column `id_client` to the `reservation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "reservation" DROP CONSTRAINT "reservation_id_user_fkey";

-- AlterTable
ALTER TABLE "reservation" DROP COLUMN "id_user",
ADD COLUMN     "id_client" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "reservation" ADD CONSTRAINT "reservation_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
