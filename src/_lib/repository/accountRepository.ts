import { Account } from "../prisma";
import { prisma } from "./prisma";

export const accountRepository = {
  async findByAccountCode(accountCode: string): Promise<Account | null> {
    return prisma.account.findUnique({
      where: { accountCode },
    });
  },

  async selectAccounts(): Promise<Account[]> {
    return prisma.account.findMany();
  },
};
