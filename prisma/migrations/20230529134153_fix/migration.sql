/*
  Warnings:

  - The primary key for the `t_employee` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `t_employee` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `t_employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `employee_id` to the `t_address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `t_employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "t_address" DROP CONSTRAINT "t_address_id_fkey";

-- DropForeignKey
ALTER TABLE "t_employee" DROP CONSTRAINT "t_employee_id_fkey";

-- DropForeignKey
ALTER TABLE "t_launch" DROP CONSTRAINT "t_launch_user_id_fkey";

-- DropForeignKey
ALTER TABLE "t_user_company" DROP CONSTRAINT "t_user_company_employee_id_fkey";

-- AlterTable
ALTER TABLE "t_address" ADD COLUMN     "employee_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "t_employee" DROP CONSTRAINT "t_employee_pkey",
DROP COLUMN "id",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "t_employee_user_id_key" ON "t_employee"("user_id");

-- AddForeignKey
ALTER TABLE "t_employee" ADD CONSTRAINT "t_employee_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "t_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_address" ADD CONSTRAINT "t_address_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "t_employee"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_user_company" ADD CONSTRAINT "t_user_company_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "t_employee"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_launch" ADD CONSTRAINT "t_launch_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "t_employee"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
