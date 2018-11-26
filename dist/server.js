"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const users_routes_1 = require("./routes/users.routes");
const cors_1 = require("./middleware/cors");
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;
// Setup environment variables
require('dotenv').config({ path: '.env' });
;
app.use(cors_1.CORS);
users_routes_1.UserRoutes(router);
app.use('/api', router);
app.listen(port, () => { console.log(`App is running on http://localhost:${port}`); });
//# sourceMappingURL=server.js.map