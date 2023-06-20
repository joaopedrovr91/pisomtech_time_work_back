/*
  Warnings:

  - You are about to drop the column `birthday` on the `t_employee` table. All the data in the column will be lost.
  - Added the required column `img_employee` to the `t_employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "t_employee" DROP COLUMN "birthday",
ADD COLUMN     "img_employee" TEXT NOT NULL;
