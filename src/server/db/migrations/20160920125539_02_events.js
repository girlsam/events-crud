exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.text('description').notNullable();
    table.boolean('over_21').notNullable();
    table.dateTime('start_datetime').notNullable();
    table.dateTime('end_datetime').notNullable();
    table.integer('venue_id').references('id').inTable('venues').unsigned();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
