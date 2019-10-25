const mongoose = require('mongoose')
const url = `${process.env.URL}/${process.env.DB_NAME}`

class DBConfig {

    static config() {
        mongoose.Promise = global.Promise;
        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

    }
}

module.exports = DBConfig