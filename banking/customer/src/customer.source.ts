import gql from "graphql-tag";

export const source = gql`
type Customer {
  id: String!
  name: String!
}
type Query {
  customer(id: String!): Customer
  findCustomers(name: String): Customer[]
}
`;