exports.up = function(knex, Promise) {
  return knex.schema.createTable('tickets', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('price').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tickets');
};
