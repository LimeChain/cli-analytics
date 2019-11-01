require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoDB = require('./database/db');
const routes = require('./routes/routes.js');
const identification = require('./middlewares/identification');
const PORT = 3000;

MongoDB.config();

app.use(identification.validateApiID)
app.use(cors());
app.options('*', cors());
// only json-type requests are valid
app.use(bodyParser.json());

routes(app);

app.listen(PORT, () =>
    console.log(`App listening on port ${ PORT }!`),
);
