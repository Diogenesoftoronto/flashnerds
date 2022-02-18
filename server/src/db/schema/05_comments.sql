create table comments (
	id SERIAL PRIMARY KEY,
	content TEXT,
	timestamp DATE,
	flashcard_id INTEGER REFERENCES flashcards(id)
);
