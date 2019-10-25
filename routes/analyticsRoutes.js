const analyticsController = require('../controllers/analyticsController');

module.exports = function (app) {

    app.route('/:command').get(analyticsController.getAnalytics)
    app.route('/').post(analyticsController.addAnalytics);

}
