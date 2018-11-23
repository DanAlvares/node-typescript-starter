"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors_1 = require("./middleware/cors");
// const dotenv = require('dotenv');
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;
app.use(cors_1.CORS);
// API Endpoints
router.get('/', (req, res) => {
    res.send('Hello');
});
// dotenv.config({ path: '.env.example' });
app.use('/', router);
app.listen(port, () => { console.log(`App is running on http://localhost:${port}`); });
//# sourceMappingURL=server.js.map