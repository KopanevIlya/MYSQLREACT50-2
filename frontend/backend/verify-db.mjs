import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

console.log('host=', process.env.DB_HOST);
console.log('port=', process.env.DB_PORT);
console.log('user=', process.env.DB_USER);
console.log('db=', process.env.DB_NAME);

const conn = await mysql.createConnection({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '123456789',
  database: process.env.DB_NAME || 'shop_db',
  port: Number(process.env.DB_PORT || 33060)
});

console.log('connected');
const [rows] = await conn.query('SELECT 1 as ok');
console.log(rows);
await conn.end();
