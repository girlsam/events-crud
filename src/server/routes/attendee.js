const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//list of all attendees
router.get('/', function(req, res, next) {
  let getAttendees = knex('attendees');
  let getAttendeeEvents =
  knex('attendees')
  .select('tickets_attendees.attendee_id', 'tickets.name', 'events.title', 'events.id')
  .join('tickets_attendees', 'attendees.id', 'tickets_attendees.attendee_id')
  .join('tickets', 'tickets_attendees.ticket_id', 'tickets.id')
  .join('events', 'tickets.event_id', 'events.id')
  .distinct('events.title');
  Promise.all([
    getAttendees,
    getAttendeeEvents
  ])
  .then((results) => {
    let renderObject = {};
    renderObject.attendees = results[0];
    renderObject.events = results[1];
    res.render('attendees/attendees', renderObject);
  })
  .catch((err) => {
    res.json({
      status: 'Error',
      message: 'Unable to fulfill request.'
    });
  });
});

//landing page that attendees' event(s)
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
