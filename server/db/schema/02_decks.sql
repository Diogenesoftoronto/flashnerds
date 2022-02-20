DROP TABLE IF EXISTS users CASCADE;
create table decks (
	id SERIAL PRIMARY KEY,
	name TEXT,
	users_id INTEGER REFERENCES users(id),
	image TEXT
);
