exports.up = (knex, Promise) => {
  return knex.schema.createTable('tickets_attendees', (table) => {
    table.integer('ticket_id').references('id').inTable('tickets');
    table.integer('attendee_id').references('id').inTable('attendees');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('tickets_attendees');
};
