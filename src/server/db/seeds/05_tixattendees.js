var faker = require('faker');

exports.seed = function(knex, Promise) {
  var numberOfArrays = new Array(400);
  var arrayOfTickets = Array.from(numberOfArrays).map(() => {
    return generateJoin(knex);
  });
  return Promise.all(arrayOfTickets);
};

function generateJoin(knex) {
  return knex('tickets_attendees')
  .insert({
    ticket_id: faker.random.number({
      min: 1,
      max: 17
    }),
    attendee_id: faker.random.number({
      min: 1,
      max: 200
    })
  });
}
