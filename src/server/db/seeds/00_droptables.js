exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets_attendees').del()
    .then(() => knex('attendees').del())
    .then(() => knex('tickets').del())
    .then(() => knex('events').del())
    .then(() => knex('venues').del());
};
