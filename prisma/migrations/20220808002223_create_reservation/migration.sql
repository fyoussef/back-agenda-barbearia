-- AlterTable
ALTER TABLE "user" ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "reservation" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "start_booking" TIMESTAMP(3) NOT NULL,
    "end_booking" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reservation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "reservation_start_booking_end_booking_key" ON "reservation"("start_booking", "end_booking");

-- AddForeignKey
ALTER TABLE "reservation" ADD CONSTRAINT "reservation_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
