require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
let MongoDB = require('./database/db');
let routes = require('./routes/routes.js')
const PORT = process.env.PORT;

MongoDB.config();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
// only json-type requests are valid
app.use(bodyParser.json({
    type: function () {
        return true;
    }
}));

routes(app)

app.listen(PORT, () =>
    console.log(`App listening on port ${ PORT }!`),
);
