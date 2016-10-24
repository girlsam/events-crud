const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//landing page that lists events
router.get('/:id', function (req, res, next) {
  const id = parseInt(req.params.id);
  let getAttendee =
  knex('attendees').where('attendees.id', id).first();
  let getEvents =
  knex.raw('select attendees.preferred_name, attendees.last_name, tickets_attendees.ticket_id, tickets_attendees.attendee_id, tickets.name, events.title, events.id FROM attendees JOIN tickets_attendees ON attendees.id = tickets_attendees.attendee_id JOIN tickets ON tickets_attendees.ticket_id = tickets.id JOIN events ON tickets.event_id = events.id');
  Promise.all([
    getAttendee,
    getEvents
  ])
  .then((results) => {
    let renderObject = {};
    renderObject.attendee = results[0];
    renderObject.attendee_events = results[1].rows;
    res.render('attendees/attendee', renderObject);
  });
});

module.exports = router;
