/*
  Warnings:

  - Added the required column `phoneNumber` to the `t_company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `t_employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "t_company" ADD COLUMN     "phoneNumber" VARCHAR(244) NOT NULL;

-- AlterTable
ALTER TABLE "t_employee" ADD COLUMN     "phoneNumber" VARCHAR(244) NOT NULL;
