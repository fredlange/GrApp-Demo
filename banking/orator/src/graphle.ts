import { Graphlet } from '@graphle/graphlet';
import { Orator } from '@graphle/graphlet/clustering/orator/Orator';
import * as express from 'express';

/**
 * Create a simple orator to handle the cluster
 */
const orator = new Orator();

/**
 * Expose the schema with http
 */
const app = express();
app.listen(4000, () => {
    app.use('/graphql', Graphlet.setupHttpFacade('http').makeHttpMiddleware())
})