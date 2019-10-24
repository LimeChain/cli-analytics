const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const analyticsService = require('./analytics-service');
const PORT = 3000;

const app = express();
app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: true }));

// only json-type requests are valid
app.use(bodyParser.json({
    type: function () {
        return true;
    }
}));

app.get('/:type', analyticsService.getAnalytics);

// Save analytics
app.post('/', analyticsService.addAnalytics);
app.listen(PORT, () =>
    console.log(`Example app listening on port ${ PORT }!`),
);
