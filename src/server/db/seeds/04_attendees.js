const faker = require('faker');

exports.seed = function(knex, Promise) {
  let numberOfArrays = new Array(100);
  let arrayOfAttendees = Array.from(numberOfArrays).map(() => {
    return createAddresses(knex);
  });
  return Promise.all(arrayOfAttendees);
};

function generateAttendee(knex) {
  return knex('attendees')
  .insert({
    preferred_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    birthday: faker.date.between('1950-01-01', '2005-12-31'),
    email_address: faker.internet.exampleEmail()
  });
}
