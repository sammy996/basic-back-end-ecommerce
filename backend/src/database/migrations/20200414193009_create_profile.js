
exports.up = function(knex) {
  return knex.schema.createTable('profile', function(table) {
    table.string('id').primary();
    table.string('full_name').notNullable();
    table.string('nickname').notNullable();
    table.string('email').notNullable();
    table.string('phone').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('profile');  
};
