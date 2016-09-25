(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const eventRegister = require('../routes/events');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/events', eventRegister);

  };

})(module.exports);
