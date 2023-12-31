const express = require('express');
const router = require('./routes/index.routes');
const sqlConnection = require('./Database/sql');

sqlConnection();

const app = express();
app.use(express.json());
app.use(router);

const PORT = 8081;
app.listen(PORT, () => console.log(`Listening at ${PORT}`));