import { Graphlet } from "@graphle/graphlet";
import { source } from "./customer.source";
import { root } from "./customer.resolvers";

export const app = Graphlet.joinAsPeer({
    name: 'customer',
    source: source,
    rootResolver: root,
  });
  