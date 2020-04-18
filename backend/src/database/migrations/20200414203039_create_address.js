
exports.up = function(knex) {
  return knex.schema.createTable('address', function (table) {
    table.increments();
    table.string('rua').notNullable();
    table.string('numero').notNullable();
    table.string('bairro').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();

    table.string('profile_id').notNullable();
    table.foreign('profile_id').references('id').inTable('profile');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('address');  
};
