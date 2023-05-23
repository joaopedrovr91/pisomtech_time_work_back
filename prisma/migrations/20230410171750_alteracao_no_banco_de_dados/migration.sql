/*
  Warnings:

  - The primary key for the `t_user_company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `t_user_company` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "t_user_company" DROP CONSTRAINT "t_user_company_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "t_user_company_pkey" PRIMARY KEY ("user_id", "company_id");
