DROP TABLE IF EXISTS users CASCADE;
create table users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	email TEXT,
	image TEXT,
	description TEXT,
	password TEXT
);
