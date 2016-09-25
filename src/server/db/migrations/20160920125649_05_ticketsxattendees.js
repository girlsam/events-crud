exports.up = (knex, Promise) => {
  return knex.schema.createTable('tickets_attendees', (table) => {
    table.integer('ticket_id').references('tickets.id').unsigned();
    table.integer('attendee_id').references('attendees.id').unsigned();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('tickets_attendees');
};
