const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  let getEvent =
  knex('events')
  .then((events) => {
    console.log(events);
    res.render('index', {
      events: events
    });
  });
});

module.exports = router;
