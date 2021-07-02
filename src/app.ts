import express from 'express';
import compression from 'compression'; // compresses requests
import lusca from 'lusca';

// Controllers (route handlers)
import * as apiController from './controllers/api';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(compression());

app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));

/**
 * API examples routes.
 */
app.get('/test', apiController.getTestCheck);

export default app;
