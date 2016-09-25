const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  knex('events').where('events.id', id)
  .then(results => {
    console.log(results);
    const renderObject = {};
    renderObject.events = results;
    res.render('events/register', renderObject);
  });
});

router.get('/:id/register', (req, res, next) => {
  const id = parseInt(req.params.id);
  let getEvent = knex('events').where('events.id', id).first();
  let getTickets = knex.raw('SELECT tickets.event_id, tickets.id, tickets.price, tickets.name, events.title FROM tickets JOIN events ON events.id=tickets.event_id');
  // let getTicketCount = ('SELECT tickets.event_id, tickets.id FROM tickets JOIN events ON events.id=tickets.event_id');
  let getVenue = knex.raw('SELECT venues.capacity, venues.id, events.title FROM venues JOIN events ON venues.id=events.venue_id');
  Promise.all([
    getEvent,
    getTickets,
    getVenue
  ])
  .then(results => {
    const renderObject = {};
    renderObject.events = results[0];
    renderObject.tickets = results[1].rows;
    renderObject.venues = results[2].rows;
    console.log(renderObject.venues);
    res.render('events/register', renderObject);
  }).catch(err => {
    console.log(err);
  });
});

module.exports = router;
