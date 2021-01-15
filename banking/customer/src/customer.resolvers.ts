import { Graphlet } from '@graphle/graphlet';
import gql from 'graphql-tag';


const DummyCustomers = {}

export const root = {

    customer: (args) => {
      return DummyCustomers[args.id]
    },
    findCustomer: (args) => {
      return []
    },
    createCustomer: (args) => {
      const generatedSimpleId = Date.now()
      DummyCustomers[generatedSimpleId] = {
        id: generatedSimpleId,
        name: args.name
      }

    return DummyCustomers[generatedSimpleId]
    }

};
