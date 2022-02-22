DROP TABLE IF EXISTS flashcards CASCADE;
create table flashcards (
	id SERIAL PRIMARY KEY,
	decks_id INTEGER REFERENCES decks(id),
	question TEXT,
	answer TEXT,
	likes INT
);
