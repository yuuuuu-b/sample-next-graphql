-- CreateTable
CREATE TABLE "public"."User" (
    "id" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "accountCode" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_accountCode_key" ON "public"."User"("accountCode");
