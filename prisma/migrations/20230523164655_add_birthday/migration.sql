/*
  Warnings:

  - Added the required column `birthday` to the `t_employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "t_employee" ADD COLUMN     "birthday" DATE NOT NULL;
