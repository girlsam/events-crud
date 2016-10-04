(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const eventRegister = require('../routes/events');
    const attendeeRoute = require('../routes/attendee');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/events', eventRegister);
    app.use('/attendee', attendeeRoute);

  };

})(module.exports);
