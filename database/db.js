const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(uri, { useUnifiedTopology: true }, { useNewUrlParser: true });

client.connect(err => {

    if (err) return console.log(err)

    console.log(`Connected MongoDB: ${uri}`)
});

module.exports = { client }