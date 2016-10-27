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
  knex('attendees')
  .distinct('events.title')
  .select('tickets_attendees.ticket_id', 'tickets_attendees.attendee_id', 'tickets.name', 'events.title', 'events.id')
  .join('tickets_attendees', 'attendees.id', 'tickets_attendees.attendee_id')
  .join('tickets', 'tickets_attendees.ticket_id', 'tickets.id')
  .join('events', 'tickets.event_id', 'events.id')
  .where('tickets_attendees.attendee_id', id);
  Promise.all([
    getAttendee,
    getEvents
  ])
  .then((results) => {
    let renderObject = {};
    renderObject.attendee = results[0];
    renderObject.attendee_events = filterResult(results[1]);
    console.log(renderObject.attendee_events);
    res.render('attendees/attendee', renderObject);
  })
  .catch((err) => {
    console.log(err);
  });
});

function convertToArr(str) {

}

//helper function
function filterResult(arr) {
  return arr.map((c, i, arr) => {
    //remove c.name into another function
    c.name = [c.name];
    console.log(c.name);
    arr.forEach((el) => {
      if (el.id === c.id) {
        c.name.push(el.name);
        console.log(c.name);
      }
    });
    return c;
  });
}

module.exports = router;
