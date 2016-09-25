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
  Promise.all([
    getEvent,
    getTickets
  ])
  .then(results => {
    const renderObject = {};
    renderObject.events = results[0];
    renderObject.tickets = results[1].rows;
    res.render('events/register', renderObject);
  }).catch(err => {
    console.log(err);
  });
});

module.exports = router;
