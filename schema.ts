import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const emailList = sqliteTable('emaillist', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    email: text('email').notNull(),
    timestamp: integer('date'),
});