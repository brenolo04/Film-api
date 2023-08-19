exports.up = knex => knex.schema.createTable('notes', table => {
  table.increment('id');
  table.text('name');
  table.integer('note_id').references('id').inTable('notes').onDelete('CASCADE');
  table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
});
exports.down = knex => knex.schema.dropTable('notes')
