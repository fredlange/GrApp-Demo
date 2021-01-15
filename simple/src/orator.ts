import {Orator} from "@graphle/graphlet/clustering/orator/orator";
import {VerboseLogging} from "@graphle/graphlet/logging/verbose.logger";


VerboseLogging.configure({
    name: 'Orator'
})
const orator = new Orator()