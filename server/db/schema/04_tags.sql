DROP TABLE IF EXISTS flashcards CASCADE;
create table tags (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	flashcards_id INTEGER REFERENCES flashcards(id)
);
