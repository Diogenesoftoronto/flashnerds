DROP TABLE IF EXISTS comments CASCADE;
create table comments (
	id SERIAL PRIMARY KEY,
	content TEXT,
	post_time TIMESTAMP,
	likes INT,
	flashcards_id INTEGER REFERENCES flashcards(id),
	users_id INTEGER REFERENCES users(id)
);
