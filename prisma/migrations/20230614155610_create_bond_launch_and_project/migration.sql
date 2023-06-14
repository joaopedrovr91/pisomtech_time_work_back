/*
  Warnings:

  - Added the required column `project_id` to the `t_launch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "t_launch" ADD COLUMN     "project_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "t_launch" ADD CONSTRAINT "t_launch_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
