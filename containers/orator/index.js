const { Orator } = require('@graphle/graphlet/clustering/orator/Orator');
const {VerboseLogging} = require('@graphle/graphlet/logging/verbose.logger')

VerboseLogging.configure({
    name: 'Orator'
})
const o = new Orator();
