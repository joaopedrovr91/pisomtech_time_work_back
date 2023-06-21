/*
  Warnings:

  - Added the required column `email` to the `t_company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "t_company" ADD COLUMN     "email" VARCHAR(244) NOT NULL;
