import { Graphlet } from '@graphle/graphlet';
import gql from 'graphql-tag';

export const root = {
  Query: () => {
    customer: () => {};
    findCustomer: () => {}
  },
};
