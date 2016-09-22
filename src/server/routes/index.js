const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  let getEvent =
  knex('events').orderBy('start_datetime', 'asc')
  .then((events) => {
    console.log(events);
    res.render('index', {
      events: events
    });
  });
});

module.exports = router;
