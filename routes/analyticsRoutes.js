const analyticsController = require('../controllers/analyticsController');

module.exports = function (app) {

    app.route('/:type').get(analyticsController.getAnalytics)
    app.route('/').post(analyticsController.addAnalytics);

}
