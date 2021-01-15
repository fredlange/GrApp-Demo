import express from 'express';
import { Graphlet } from '@graphle/graphlet';
import {VerboseLogging} from "@graphle/graphlet/logging/verbose.logger";

const spectator = Graphlet.setupHttpFacade('schemaSpectator')

const app = express();
app.listen(4000, () => {
    app.use('/graphql', spectator.makeHttpMiddleware());
    VerboseLogging.info('Running a GraphQL API server at http://localhost:4000/graphql')
});