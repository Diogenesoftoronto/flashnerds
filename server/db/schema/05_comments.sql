create table comments (
	id SERIAL PRIMARY KEY,
	content TEXT,
	timestamp DATE,
	flashcards_id INTEGER REFERENCES flashcards(id)
);
