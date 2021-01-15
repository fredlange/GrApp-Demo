import gql from "graphql-tag";

export const source = `
type Customer {
  id: String!
  name: String!
}
type Query {
  customer(id: String!): Customer
  findCustomers(name: String): [Customer]
}
type Mutation {
  createCustomer(name: String!): Customer
}
`;