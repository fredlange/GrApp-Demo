
const DummyCustomers = {};

export const root = {
  customer: (args) => DummyCustomers[args.id],
  findCustomers: (args) =>
    Object.entries(DummyCustomers)
      .filter(([id, customer]) => customer['name'] == args.name)
      .map(([k, v]) => v),
  createCustomer: (args) => {
    const generatedSimpleId = Date.now();
    DummyCustomers[generatedSimpleId] = {
      id: generatedSimpleId,
      name: args.name,
    };

    return DummyCustomers[generatedSimpleId];
  },
};
