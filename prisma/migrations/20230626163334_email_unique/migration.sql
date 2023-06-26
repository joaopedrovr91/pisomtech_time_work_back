/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `t_user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "t_user_email_key" ON "t_user"("email");
