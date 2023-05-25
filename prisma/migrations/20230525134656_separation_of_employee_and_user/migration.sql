-- DropForeignKey
ALTER TABLE "t_launch" DROP CONSTRAINT "t_launch_user_id_fkey";

-- AlterTable
ALTER TABLE "t_employee" ALTER COLUMN "birthday" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "t_launch" ADD CONSTRAINT "t_launch_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "t_employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
