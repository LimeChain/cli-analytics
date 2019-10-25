const CliCommandData = require('../database/models/cliCommandData')

class AnalyticsController {

    static async getAnalytics (req, res) {
        try {
            let result = await CliCommandData.find({command: req.params.command})
            res.status(200).json(result)
        } catch (e) {
            console.error(e)
            res.status(400).send(e)
        }
    }

    static async addAnalytics (req, res){
       try {
            let model = new CliCommandData(req.body)
            let result = await model.save();
            res.status(200).json(result)
       } catch (e) {
            console.error(e)
            res.status(400).send(e)
       }
        
    }

    
}

module.exports = AnalyticsController