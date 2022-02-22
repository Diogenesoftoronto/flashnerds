DROP TABLE IF EXISTS decks CASCADE;
create table decks (
	id SERIAL PRIMARY KEY,
	name TEXT,
	users_id INTEGER REFERENCES users(id),
	image TEXT
);
