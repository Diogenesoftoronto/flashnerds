DROP TABLE IF EXISTS tags CASCADE;
create table tags (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	flashcards_id INTEGER REFERENCES flashcards(id)
);
