const getAllFlashcards = function(db) {
  return db
    .query(`SELECT * FROM flashcards;`)
    .then(data => data.rows)
    .catch(console.error("Error running query to get all flashcards from database"));
};

const getFlashcardsByDeckId = function (db, deckId) {
  let flashcardValues = [deckId];
  let queryString = `SELECT * FROM flashcards
                        WHERE decks_id = $1;`;
  return db
    .query(queryString, flashcardValues)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => console.log(err));
};

const getFlashcardByFlashcardId = function (db, flashcardId) {
  let flashcardValues = [flashcardId];
  let queryString = `SELECT * FROM flashcards
                        WHERE flashcards.id = $1;`;
  return db
    .query(queryString, flashcardValues)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => console.log(err));
};

const addFlashcard = function (db, flashcardInfo) {
  let flashcardValues = [
    flashcardInfo.deckId,
    flashcardInfo.question,
    flashcardInfo.answer,
  ];
  let queryString = `INSERT INTO flashcards (decks_id, question, answer, likes)
  VALUES($1, $2, $3, 0) RETURNING *;`;
  return db
    .query(queryString, flashcardValues)
    .then((res) => res.rows[0])
    .catch((err) => console.log(err));
};

const editFlashcard = function (db, flashcardInfo) {
  let flashcardValues = [
    flashcardInfo.deckId,
    flashcardInfo.question,
    flashcardInfo.answer,
    flashcardInfo.likes,
    flashcardInfo.flashcardId,
  ];
  let queryString = `UPDATE flashcards SET decks_id = $1, question = $2, answer = $3, likes = $4
  WHERE flashcards.id = $5 RETURNING *;`;
  return db
    .query(queryString, flashcardValues)
    .then((res) => res.rows[0])
    .catch((err) => console.log(err));
};
const deleteFlashcard = function (db, flashcardId) {
  let flashcardValues = [flashcardId];
  let queryString = `DELETE FROM flashcards WHERE id = $1;`;
  return db
    .query(queryString, flashcardValues)
    .then((res) => res.rows[0])
    .catch((err) => console.log(err));
};
module.exports = {
  getAllFlashcards,
  getFlashcardsByDeckId,
  getFlashcardByFlashcardId,
  addFlashcard,
  editFlashcard,
  deleteFlashcard,
};
