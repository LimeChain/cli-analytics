class Identification {
    static async validateApiID(req, res, next) {
        if (!req.headers.id || (req.headers.id != process.env.API_ID)) {
            console.error('No API ID was passed as header for identification or ID not valid.');
            res.status(403).send('Unauthorized');
        }
        
        next();
    }
}

module.exports = Identification