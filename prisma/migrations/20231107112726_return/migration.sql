/*
  Warnings:

  - You are about to drop the column `first` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `imageText` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `second` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `skills` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `first` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `imageText` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `second` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `skills` on the `User` table. All the data in the column will be lost.
  - Added the required column `title` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "first",
DROP COLUMN "imageText",
DROP COLUMN "imageUrl",
DROP COLUMN "second",
DROP COLUMN "skills",
ADD COLUMN     "content" TEXT,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "first",
DROP COLUMN "imageText",
DROP COLUMN "imageUrl",
DROP COLUMN "second",
DROP COLUMN "skills",
ADD COLUMN     "image" TEXT;
