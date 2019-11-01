const mongoose = require('mongoose');
const url = 'mongodb://mongo:27017/cli-analytics';

class DBConfig {

    static config() {
        mongoose.Promise = global.Promise;
        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

    }
}

module.exports = DBConfig