// File needed if want to create tables in database through knex migrate.

/**
 * up This will generate all the tables in the database
 * @param {Promise} knex Helps execute SQL queries to create the tables
 * @param {Promise} Promise Ensures that all tables will be created
 * @return {Promise}
 */
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('facebook_id');
      table.string('username');
      table.string('token');
      table.boolean('role');
    }),
    knex.schema.createTable('artist', (table) => {
      table.increments('id').primary();
      table.string('username');
      table.string('city');
      table.string('image');
      table.string('uri').unique();
    }),
    knex.schema.createTable('date', (table) => {
      table.increments('id').primary();
      table.string('day');
    }),
    knex.schema.createTable('requested_gigs', (table) => {
      table.increments('id').primary();
      table.string('message');
      table
        .integer('artist_id')
        .unsigned()
        .references('id')
        .inTable('artist');
      table.string('booking_date');
      table.string('message_stamp');
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users');
      table.string('artistName');
    }),
    knex.schema.createTable('single', (table) => {
      table.increments('id').primary();
      table.string('single_id');
      table.string('artist');
    }),
    knex.schema.createTable('artist_genre', (table) => {
      table.increments('id').primary();
      table.string('genre');
      table.string('username');
      table.string('city');
      table.string('image');
      table.string('uri');
    }),
    knex.schema.createTable('booking_date', (table) => {
      table.increments('id').primary();
      table
        .integer('artist_id')
        .unsigned()
        .references('id')
        .inTable('artist');
      table.string('date');
    }),
  ]);
};

/**
 * @param {Promise} knex Helps execute SQL queries
 * @param {Promise} Promise Was not needed
 * @return {Promise} Will drop all the tables if you need to rollback a migration
 */
exports.down = function (knex, Promise) {
  return (
    knex.schema
      .dropTable('users')
      .dropTable('artist')
      .dropTable('date')
      // .dropTable('artist_availability')
      .dropTable('requested_gigs')
      .dropTable('single')
      .dropTable('artist_genre')
      .dropTable('booking_date')
  );
};
