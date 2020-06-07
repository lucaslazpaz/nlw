import Knex from 'knex';

export async function up(knex: Knex) {
    //CREATE TABLE
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();

        table.integer('point_id', 11).unsigned().notNullable().references('id').inTable('points');

        table.integer('item_id', 11).unsigned().notNullable().references('id').inTable('items');
    });
}

export async function down(knex: Knex) {
    //DROP TABLE
    return knex.schema.dropTable('point_items');
}