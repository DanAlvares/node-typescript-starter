import * as express from 'express';
import * as path from 'path';

import { CORS } from './middleware/cors'
import { Authenticate } from './middleware/authenticate';

// const dotenv = require('dotenv');

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(CORS);

// API Endpoints
router.get('/', (req, res) => {
    res.send('Hello');
});

// dotenv.config({ path: '.env.example' });

app.use('/', router);

app.listen(port, () => { console.log(`App is running on http://localhost:${port}`) });

