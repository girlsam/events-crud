exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('venues')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('venues').insert({
          name: 'Steve\'s House',
          capacity: '75',
          line_1: '150 Long Dark Road',
          line_2: '',
          city: 'Hawkins',
          state: 'Indiana',
          zip: '46001'
        }),
        knex('venues').insert({
          name: 'US Department of Energy Lab',
          capacity: '110',
          line_1: '10 Maple Street',
          line_2: 'Lab 100',
          city: 'Hawkins',
          state: 'Indiana',
          zip: '46001'
        }),
        knex('venues').insert({
          name: 'Castle Byers',
          capacity: '50',
          line_1: 'Deep in the Woods',
          line_2: '',
          city: 'Hawkins',
          state: 'Indiana',
          zip: '46001'
        })
      ]);
    });
};
