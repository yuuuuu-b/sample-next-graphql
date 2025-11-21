import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("password123", 10);
  // Clear existing data
  await prisma.account.deleteMany();

  // Create users
  await prisma.account.create({
    data: {
      accountName: "testUser",
      password: hashedPassword,
      role: Role.ADMIN,
      accountCode: "A1234",
    },
  });

  console.log("Seed data inserted successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
