-- Add your schema initialisation script here if you're on Postgres and not using an ORM
-- Connect to the database
\c db;

CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    due_date TIMESTAMP NOT NULL,
    create_date TIMESTAMP NOT NULL
);
