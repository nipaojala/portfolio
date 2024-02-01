/*
  Warnings:

  - You are about to drop the column `imageText` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `User` table. All the data in the column will be lost.
  - The `image` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "imageText",
DROP COLUMN "imageUrl",
DROP COLUMN "image",
ADD COLUMN     "image" JSONB[];
