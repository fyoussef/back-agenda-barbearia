/*
  Warnings:

  - You are about to drop the column `reservationId` on the `service` table. All the data in the column will be lost.
  - Added the required column `id_service` to the `reservation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "service" DROP CONSTRAINT "service_reservationId_fkey";

-- AlterTable
ALTER TABLE "reservation" ADD COLUMN     "id_service" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "service" DROP COLUMN "reservationId";

-- AddForeignKey
ALTER TABLE "reservation" ADD CONSTRAINT "reservation_id_service_fkey" FOREIGN KEY ("id_service") REFERENCES "service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
