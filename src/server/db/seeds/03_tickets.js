exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tickets').insert({
          name: 'Middle Schooler',
          price: '35.00',
          event_id: knex('events').select('id').where('title', 'The Case for Eggo Waffles')
        }),
        knex('tickets').insert({
          name: 'PTA Parent',
          price: '55.00',
          event_id: knex('events').select('id').where('title', 'The Case for Eggo Waffles')
        }),
        knex('tickets').insert({
          name: 'Lab Specialist',
          price: '75.00',
          event_id: knex('events').select('id').where('title', 'What Happened The Night Barb Went Upside Down')
        }),
        knex('tickets').insert({
          name: 'PTA Parent',
          price: '55.00',
          event_id: knex('events').select('id').where('title', 'What Happened The Night Barb Went Upside Down')
        }),
        knex('tickets').insert({
          name: 'Child Services',
          price: '105.00',
          event_id: knex('events').select('id').where('title', 'What Happened The Night Barb Went Upside Down')
        }),
        knex('tickets').insert({
          name: 'Middle Schooler',
          price: '35.00',
          event_id: knex('events').select('id').where('title', 'Are Steve Harrington & Jean Ralphio Really Related?')
        }),
        knex('tickets').insert({
          name: 'PTA Parent',
          price: '55.00',
          event_id: knex('events').select('id').where('title', 'Are Steve Harrington & Jean Ralphio Really Related?')
        }),
        knex('tickets').insert({
          name: 'Child Services',
          price: '105.00',
          event_id: knex('events').select('id').where('title', 'Are Steve Harrington & Jean Ralphio Really Related?')
        }),
        knex('tickets').insert({
          name: 'Lab Specialist',
          price: '75.00',
          event_id: knex('events').select('id').where('title', 'Are Steve Harrington & Jean Ralphio Really Related?')
        }),
        knex('tickets').insert({
          name: 'Lab Specialist',
          price: '75.00',
          event_id: knex('events').select('id').where('title', 'Before There Was Eleven, There Was Ten')
        }),
        knex('tickets').insert({
          name: 'PTA Parent',
          price: '55.00',
          event_id: knex('events').select('id').where('title', 'Before There Was Eleven, There Was Ten')
        }),
        knex('tickets').insert({
          name: 'Child Services',
          price: '105.00',
          event_id: knex('events').select('id').where('title', 'Before There Was Eleven, There Was Ten')
        }),
        knex('tickets').insert({
          name: 'Lab Specialist',
          price: '75.00',
          event_id: knex('events').select('id').where('title', 'Kiddie Pool, Salt, Small Child: How to Get to the Upside Down')
        }),
        knex('tickets').insert({
          name: 'PTA Parent',
          price: '55.00',
          event_id: knex('events').select('id').where('title', 'Kiddie Pool, Salt, Small Child: How to Get to the Upside Down')
        }),
        knex('tickets').insert({
          name: 'Child Services',
          price: '105.00',
          event_id: knex('events').select('id').where('title', 'Kiddie Pool, Salt, Small Child: How to Get to the Upside Down')
        }),
        knex('tickets').insert({
          name: 'Lab Specialist',
          price: '75.00',
          event_id: knex('events').select('id').where('title', 'Demagorgon Meet & Greet')
        }),
        knex('tickets').insert({
          name: 'PTA Parent',
          price: '55.00',
          event_id: knex('events').select('id').where('title', 'Demagorgon Meet & Greet')
        })
      ]);
    });
};
