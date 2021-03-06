const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  knex('events').where('events.id', id)
  .then(results => {
    const renderObject = {};
    renderObject.events = results;
    res.render('events/register', renderObject);
  });
});

router.get('/:id/register', (req, res, next) => {
  const eventID = parseInt(req.params.id);
  let getEvent = knex('events').where('events.id', eventID).first();
  let getTickets = knex.raw('SELECT tickets.event_id, tickets.id, tickets.price, tickets.name, events.title FROM tickets JOIN events ON events.id=tickets.event_id');
  let getVenue = knex('venues')
  .select('venues.capacity', 'events.id', 'events.venue_id')
  .join('events', {'venues.id': 'events.venue_id'});
  let getGuestCount = knex.select('tickets_attendees.attendee_id', 'events.id')
  .from('tickets_attendees')
  .join('tickets', {'tickets_attendees.ticket_id': 'tickets.id'})
  .join('events', {'tickets.event_id': 'events.id'})
  .where('events.id', eventID);
  Promise.all([
    getEvent,
    getTickets,
    getVenue,
    getGuestCount
  ])
  .then(results => {
    const renderObject = {};
    renderObject.events = results[0];
    renderObject.tickets = results[1].rows;
    renderObject.venues = results[2];
    renderObject.capacity = results[3];
    res.render('events/register', renderObject);
  }).catch(err => {
    console.log(err);
  });
});

//add hidden field with ticket id
router.post('/:id/register', (req, res, next) => {
  let eventID = req.params.id;
  let ticketID = req.body.ticket_type;
  let newRegister = {
    preferred_name: req.body.preferred_name,
    last_name: req.body.last_name,
    birthday: req.body.birthday,
    email: req.body.email
  };
  knex('attendees').insert(newRegister, 'id')
  .then(([id]) => {
    return knex('tickets_attendees').insert({'attendee_id': id, 'ticket_id': ticketID})
  }).then(() => res.redirect('/events/' + eventID + '/register'))
  .catch((err) => {
    console.log(err);
  });
});

module.exports = router;
