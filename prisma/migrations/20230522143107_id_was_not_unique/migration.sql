-- DropIndex
DROP INDEX "t_employee_id_key";

-- AlterTable
CREATE SEQUENCE t_employee_id_seq;
ALTER TABLE "t_employee" ALTER COLUMN "id" SET DEFAULT nextval('t_employee_id_seq');
ALTER SEQUENCE t_employee_id_seq OWNED BY "t_employee"."id";
