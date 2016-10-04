const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//landing page that lists events
router.get('/:id', function (req, res, next) {
  const id = parseInt(req.params.id);
  let getAttendee =
  knex('attendees').where('attendees.id', id).first();
  let getEvents =
  knex.raw('SELECT DISTINCT venues.capacity, venues.name, venues.id FROM venues JOIN events ON venues.id = events.venue_id');
  Promise.all([
    getAttendee,
    getEvents
  ])
  .then((results) => {
    console.log(results);
    const renderObject = {};
    renderObject.attendee = results[0];
    res.render('attendees/attendee', renderObject);
  });
});

module.exports = router;
