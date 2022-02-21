create table comments (
	id SERIAL PRIMARY KEY,
	content TEXT,
	post_time DATE,
	flashcards_id INTEGER REFERENCES flashcards(id)
	users_id INTEGER REFERENCES users(id)
);
