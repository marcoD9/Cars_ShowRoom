/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Car` table. All the data in the column will be lost.
  - Added the required column `model` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "imageUrl",
DROP COLUMN "name",
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
