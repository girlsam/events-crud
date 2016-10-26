const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const indexController = require('../controllers/index');

//landing page that lists events
router.get('/', function (req, res, next) {
  let getEvent =
  knex('events').orderBy('start_datetime', 'asc');
  let getVenue =
  knex.raw('SELECT DISTINCT venues.capacity, venues.name, venues.id FROM venues JOIN events ON venues.id = events.venue_id');
  Promise.all([
    getEvent,
    getVenue
  ])
  .then((results) => {
    const renderObject = {};
    renderObject.events = results[0];
    renderObject.venues = results[1].rows;
    res.render('index', renderObject);
  });
});

module.exports = router;
