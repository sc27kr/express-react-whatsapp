import { connection } from '../db/connection.js';

await connection.schema.dropTableIfExists('user');
await connection.schema.dropTableIfExists('message');

await connection.schema.createTable('user', (table) => {
  table.text('username').notNullable().primary();
  table.text('password').notNullable();
});

await connection.schema.createTable('message', (table) => {
  table.text('id').notNullable().primary();
  table.text('user').notNullable();
  table.text('text').notNullable();
  table.text('createdAt').notNullable();
});

await connection.table('message').insert([
  {
    id: 'm00000000001',
    user: 'system',
    text: 'Welcome to the GraphQL chat!',
    createdAt: '2023-01-31T11:00:00.000Z',
  },
]);

await connection.table('user').insert([
  {
    username: 'user1',
    password: 'user1!',
  },
  {
    username: 'user2',
    password: 'user2!',
  },
  {
    username: 'user3',
    password: 'user3!',
  },
]);

process.exit();
