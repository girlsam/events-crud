var faker = require('faker');

exports.seed = function(knex, Promise) {
  var numberOfArrays = new Array(200);
  var arrayOfAttendees = Array.from(numberOfArrays).map(() => {
    return generateAttendee(knex);
  });
  return Promise.all(arrayOfAttendees);
};

function generateAttendee(knex) {
  return knex('attendees')
  .insert({
    preferred_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    birthday: faker.date.between('1950-01-01', '2005-12-31'),
    email: faker.internet.exampleEmail()
  });
}
