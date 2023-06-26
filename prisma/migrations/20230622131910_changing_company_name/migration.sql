/*
  Warnings:

  - You are about to drop the column `name` on the `t_company` table. All the data in the column will be lost.
  - Added the required column `nameCompany` to the `t_company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "t_company" DROP COLUMN "name",
ADD COLUMN     "nameCompany" VARCHAR(244) NOT NULL;
