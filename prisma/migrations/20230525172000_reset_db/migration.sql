-- DropForeignKey
ALTER TABLE "t_employee" DROP CONSTRAINT "t_employee_address_id_fkey";

-- AddForeignKey
ALTER TABLE "t_address" ADD CONSTRAINT "t_address_id_fkey" FOREIGN KEY ("id") REFERENCES "t_employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
