/*
  Warnings:

  - You are about to drop the column `project_name` on the `t_launch` table. All the data in the column will be lost.
  - You are about to drop the column `project_type` on the `t_launch` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "t_launch" DROP COLUMN "project_name",
DROP COLUMN "project_type";

-- CreateTable
CREATE TABLE "t_user_project" (
    "employee_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,

    CONSTRAINT "t_user_project_pkey" PRIMARY KEY ("employee_id","project_id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "project_name" VARCHAR(244) NOT NULL,
    "project_type" VARCHAR(244) NOT NULL,
    "company_id" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "t_user_project" ADD CONSTRAINT "t_user_project_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "t_employee"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_user_project" ADD CONSTRAINT "t_user_project_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "t_company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
