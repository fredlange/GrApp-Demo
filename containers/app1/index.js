const { Graphlet } = require('@graphle/graphlet');

const app = Graphlet.joinAsPeer({
  name: 'App1',
  source: `type Query {
        example: String
    }`,
  rootResolver: {
    example: () => 'ThisIsString',
  },
});
