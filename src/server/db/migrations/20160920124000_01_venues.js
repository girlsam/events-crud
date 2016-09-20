exports.up = function(knex, Promise) {
  return knex.schema.createTable('venues', (table) => {
    table.increments();
    table.increments();
    table.string('name').notNullable();
    table.integer('capacity').notNullable();
    table.string('line_1').notNullable();
    table.string('line_2').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('zip').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('venues');
};
