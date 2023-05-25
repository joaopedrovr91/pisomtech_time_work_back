/*
  Warnings:

  - The primary key for the `t_user_company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `t_user_company` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[address_id]` on the table `t_employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `employee_id` to the `t_user_company` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "t_user_company" DROP CONSTRAINT "t_user_company_user_id_fkey";

-- AlterTable
ALTER TABLE "t_employee" ADD COLUMN     "address_id" INTEGER;

-- AlterTable
ALTER TABLE "t_user_company" DROP CONSTRAINT "t_user_company_pkey",
DROP COLUMN "user_id",
ADD COLUMN     "employee_id" INTEGER NOT NULL,
ADD CONSTRAINT "t_user_company_pkey" PRIMARY KEY ("employee_id", "company_id");

-- CreateTable
CREATE TABLE "t_address" (
    "id" SERIAL NOT NULL,
    "number" VARCHAR(244) NOT NULL,
    "road" VARCHAR(244) NOT NULL,
    "city" VARCHAR(244) NOT NULL,
    "state" VARCHAR(244) NOT NULL,
    "country" VARCHAR(244) NOT NULL,
    "complement" VARCHAR(244) NOT NULL,

    CONSTRAINT "t_address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "t_employee_address_id_key" ON "t_employee"("address_id");

-- AddForeignKey
ALTER TABLE "t_employee" ADD CONSTRAINT "t_employee_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "t_address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_user_company" ADD CONSTRAINT "t_user_company_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "t_employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
