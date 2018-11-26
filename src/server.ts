import * as express from 'express';
import { UserRoutes } from './routes/users.routes';

import { CORS } from './middleware/cors'

import { Request, Response, NextFunction } from 'express';

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

// Setup environment variables
require('dotenv').config({ path: '.env' });;

app.use(CORS);

UserRoutes(router)

app.use('/api', router);

app.listen(port, () => { console.log(`App is running on http://localhost:${port}`) });

