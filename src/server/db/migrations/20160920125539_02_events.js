exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.text('description').notNullable();
    table.boolean('over_21').notNullable();
    table.date('start_datetime').notNullable();
    table.date('end_datetime').notNullable();
    table.integer('venue_id').references('id').inTable('venues');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
