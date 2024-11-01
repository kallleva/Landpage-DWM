-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "eventname" TEXT NOT NULL,
    "dataevent" TIMESTAMP(3) NOT NULL,
    "localevent" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_eventname_key" ON "Event"("eventname");
