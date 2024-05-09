import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const todo = sqliteTable('todo', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  text: text('text').notNull(),
  timestamp: integer('date'),
});