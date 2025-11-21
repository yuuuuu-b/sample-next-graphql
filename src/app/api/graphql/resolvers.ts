import { accountRepository } from "@/_lib/repository/accountRepository";

export const graphqlResolvers = {
  Query: {
    accounts: async () => {
      return accountRepository.selectAccounts();
    },
  },
};
