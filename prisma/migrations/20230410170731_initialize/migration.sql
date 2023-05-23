-- CreateTable
CREATE TABLE "t_user" (
    "id" SERIAL NOT NULL,
    "password" VARCHAR(244) NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "t_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_employee" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(244) NOT NULL,
    "email" VARCHAR(244) NOT NULL,

    CONSTRAINT "t_employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_user_company" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "company_id" INTEGER NOT NULL,

    CONSTRAINT "t_user_company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_company" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(244) NOT NULL,
    "img_path" VARCHAR(344) NOT NULL,

    CONSTRAINT "t_company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_launch" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "start_time" TIME NOT NULL,
    "end_time" TIME NOT NULL,
    "project_name" VARCHAR(244) NOT NULL,
    "project_type" VARCHAR(244) NOT NULL,
    "internal" BOOLEAN NOT NULL DEFAULT false,
    "working" BOOLEAN NOT NULL DEFAULT true,
    "description" VARCHAR(500) NOT NULL,
    "company_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "launched_at" TIMESTAMP NOT NULL,

    CONSTRAINT "t_launch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "t_employee_id_key" ON "t_employee"("id");

-- AddForeignKey
ALTER TABLE "t_employee" ADD CONSTRAINT "t_employee_id_fkey" FOREIGN KEY ("id") REFERENCES "t_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_user_company" ADD CONSTRAINT "t_user_company_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "t_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_user_company" ADD CONSTRAINT "t_user_company_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "t_company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_launch" ADD CONSTRAINT "t_launch_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "t_company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_launch" ADD CONSTRAINT "t_launch_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "t_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
