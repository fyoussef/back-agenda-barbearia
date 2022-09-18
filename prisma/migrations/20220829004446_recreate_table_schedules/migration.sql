-- CreateTable
CREATE TABLE "schedules" (
    "hour" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "schedules_hour_key" ON "schedules"("hour");
