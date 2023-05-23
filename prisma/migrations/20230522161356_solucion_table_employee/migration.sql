/*
  Warnings:

  - You are about to drop the column `email` on the `t_employee` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `t_employee` table. All the data in the column will be lost.
  - Added the required column `email` to the `t_user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `t_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "t_employee" DROP COLUMN "email",
DROP COLUMN "name";

-- AlterTable
ALTER TABLE "t_user" ADD COLUMN     "email" VARCHAR(244) NOT NULL,
ADD COLUMN     "name" VARCHAR(244) NOT NULL;
