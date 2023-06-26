/*
  Warnings:

  - You are about to drop the column `img_path` on the `t_company` table. All the data in the column will be lost.
  - You are about to drop the column `img_employee` on the `t_employee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "t_company" DROP COLUMN "img_path";

-- AlterTable
ALTER TABLE "t_employee" DROP COLUMN "img_employee";
