exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tickets').insert({
          name: 'Middle Schooler',
          price: '35.00'
        }),
        knex('tickets').insert({
          name: 'PTA Parent',
          price: '55.00'
        }),
        knex('tickets').insert({
          name: 'Lab Specialist',
          price: '75.00'
        }),
        knex('tickets').insert({
          name: 'Child Services',
          price: '105.00'
        })
      ]);
    });
};
