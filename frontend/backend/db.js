import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '123456789',
    database: process.env.DB_NAME || 'shop_db',
    port: process.env.DB_PORT || 3307,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default pool.promise()