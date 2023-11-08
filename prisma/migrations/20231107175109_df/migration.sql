/*
  Warnings:

  - The `imageText` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `imageUrl` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "imageText",
ADD COLUMN     "imageText" TEXT[],
DROP COLUMN "imageUrl",
ADD COLUMN     "imageUrl" TEXT[];
