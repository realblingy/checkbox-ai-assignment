import pg, { PoolConfig } from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const { Pool } = pg;

const poolConfig: PoolConfig = {
  // user: process.env.DB_POSTGRES_USERNAME,
  // host: 'localhost',
  // database: process.env.DB_POSTGRES_DATABASE,
  // password: process.env.DB_POSTGRES_PASSWORD,
  // port: parseInt(process.env.DB_POSTGRES_PORT || '5432')
  port: 5432,
  database: 'db',
  user: 'postgres',
  password: 'postgres',
  host: '172.25.0.10'
};

const pool = new Pool(poolConfig);

export default pool;
