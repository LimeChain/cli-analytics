const dbClient = require('./database/db').client;
const config = require('./config');
const dbName = config.DATABASE_NAME;
const collection = config.COLLECTION;

class AnalyticsService {

    static async getAnalytics(req, res) {
        try {
            let result = await dbClient.db(dbName).collection(collection).find({type: req.params.type}).toArray()
            res.status(200).json(result)
        } catch (e) {
            res.status(401).send(e.message)
        }
        
    }

    static async addAnalytics(req, res) {
        try {
            await dbClient.db(dbName).collection(collection).insertOne(req.body)
            res.status(200).send()
        } catch (e) {
            res.status(401).send(e.message)
        }
        
    }
}

module.exports = AnalyticsService