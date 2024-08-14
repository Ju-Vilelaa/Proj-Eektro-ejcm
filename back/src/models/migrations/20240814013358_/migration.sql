/*
  Warnings:

  - A unique constraint covering the columns `[idUsuario]` on the table `Endereco` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Endereco_idUsuario_key" ON "Endereco"("idUsuario");
