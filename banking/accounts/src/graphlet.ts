import { Graphlet } from '@graphle/graphlet';


const DummyAccounts = {}

const root = {
  account: async (args) => {
    return DummyAccounts[args.id];
  },
  createAccount: async (args) => {
    const generatedSimpleId = Date.now()
    DummyAccounts[generatedSimpleId] = {
        id: generatedSimpleId,
        customerId: args.customerId,
        balance: 0
    }
    return DummyAccounts[generatedSimpleId]
  }
};

const source = `
  type Query {
    account(id: String!): Account
  }
  type Account {
    id: String!
    customerId: String!
    balance: Int
  }
  type Mutation {
      createAccount(customerId: String!): Account!
  }
`;

export const app = Graphlet.joinAsPeer({
  name: 'accounts-graphlet',
  source: source,
  rootResolver: root,
});
