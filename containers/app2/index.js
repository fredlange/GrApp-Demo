const { Graphlet } = require('@graphle/graphlet');

const app = Graphlet.joinAsPeer({
  name: 'App2',
  source: `type Query {
        otherExample: String
    }`,
  rootResolver: {
    otherExample: () => 'ThisIsAnotherString',
  },
});
