class Identification {
    static async validateApiID(req, res, next) {
        if (!req.headers['x-cli-analytics-app-id'] || (req.headers['x-cli-analytics-app-id'] != process.env.API_ID)) {
            console.error('No API ID was passed as header for identification or ID not valid.');
            res.status(403).send('Unauthorized');
        }
        
        next();
    }
}

module.exports = Identification