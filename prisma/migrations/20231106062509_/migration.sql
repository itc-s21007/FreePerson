/*
  Warnings:

  - You are about to drop the column `tital` on the `Books` table. All the data in the column will be lost.
  - You are about to drop the `Move` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `title` to the `Books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Books" DROP COLUMN "tital",
ADD COLUMN     "title" TEXT NOT NULL;

-- DropTable
DROP TABLE "Move";

-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "poster" BYTEA NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);
