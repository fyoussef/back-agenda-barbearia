-- CreateTable
CREATE TABLE "schedules" (
    "hours" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "schedules_hours_key" ON "schedules"("hours");
