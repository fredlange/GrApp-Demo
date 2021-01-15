import {Graphlet} from "@graphle/graphlet"
import gql from "graphql-tag"


const root = {
    Query: () => {
        account: () => {}
    }
}

const source = gql`
type Account: {
    id: String!
    customerId: String!
    balance: Int
}
type Query {
    account(id: String!): Account
}
`

export const app = Graphlet.joinAsPeer({
    name: 'accounts-graphlet',
    source: source,
    root: root
})