-- CreateTable
CREATE TABLE "Orcamento" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "dataevent" TIMESTAMP(3) NOT NULL,
    "horario" TIMESTAMP(3) NOT NULL,
    "fotografo" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Orcamento_pkey" PRIMARY KEY ("id")
);
