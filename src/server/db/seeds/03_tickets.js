exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tickets').insert({
          name: 'Middle Schooler',
          price: '35.00',
          event_id: knex('events').where('title', 'The Case for Eggo Waffles').select('id')
        }),
        knex('tickets').insert({
          name: 'PTA Parent',
          price: '55.00',
          event_id: knex('events').where('title', 'The Case for Eggo Waffles').select('id')
        }),
        knex('tickets').insert({
          name: 'Lab Specialist',
          price: '75.00',
          event_id: knex('events').where('title', 'What Happened The Night Barb Went Upside Down').select('id')
        }),
        knex('tickets').insert({
          name: 'PTA Parent',
          price: '55.00',
          event_id: knex('events').where('title', 'What Happened The Night Barb Went Upside Down').select('id')
        }),
        knex('tickets').insert({
          name: 'Child Services',
          price: '105.00',
          event_id: knex('events').where('title', 'What Happened The Night Barb Went Upside Down').select('id')
        }),
        knex('tickets').insert({
          name: 'Middle Schooler',
          price: '35.00',
          event_id: knex('events').where('title', 'Are Steve Harrington & Jean Ralphio Really Related?').select('id')
        }),
        knex('tickets').insert({
          name: 'PTA Parent',
          price: '55.00',
          event_id: knex('events').where('title', 'Are Steve Harrington & Jean Ralphio Really Related?').select('id')
        }),
        knex('tickets').insert({
          name: 'Child Services',
          price: '105.00',
          event_id: knex('events').where('title', 'Are Steve Harrington & Jean Ralphio Really Related?').select('id')
        }),
        knex('tickets').insert({
          name: 'Lab Specialist',
          price: '75.00',
          event_id: knex('events').where('title', 'Are Steve Harrington & Jean Ralphio Really Related?').select('id')
        }),
        knex('tickets').insert({
          name: 'Lab Specialist',
          price: '75.00',
          event_id: knex('events').where('title', 'Before There Was Eleven, There Was Ten').select('id')
        }),
        knex('tickets').insert({
          name: 'PTA Parent',
          price: '55.00',
          event_id: knex('events').where('title', 'Before There Was Eleven, There Was Ten').select('id')
        }),
        knex('tickets').insert({
          name: 'Child Services',
          price: '105.00',
          event_id: knex('events').where('title', 'Before There Was Eleven, There Was Ten').select('id')
        }),
        knex('tickets').insert({
          name: 'Lab Specialist',
          price: '75.00',
          event_id: knex('events').where('title', 'Kiddie Pool, Salt, Small Child: How to Get to the Upside Down').select('id')
        }),
        knex('tickets').insert({
          name: 'PTA Parent',
          price: '55.00',
          event_id: knex('events').where('title', 'Kiddie Pool, Salt, Small Child: How to Get to the Upside Down').select('id')
        }),
        knex('tickets').insert({
          name: 'Child Services',
          price: '105.00',
          event_id: knex('events').where('title', 'Kiddie Pool, Salt, Small Child: How to Get to the Upside Down').select('id')
        }),
        knex('tickets').insert({
          name: 'Lab Specialist',
          price: '75.00',
          event_id: knex('events').where('title', 'Demagorgon Meet & Greet').select('id')
        }),
        knex('tickets').insert({
          name: 'PTA Parent',
          price: '55.00',
          event_id: knex('events').where('title', 'Demagorgon Meet & Greet').select('id')
        })
      ]);
    });
};
