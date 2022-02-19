const getFlashcardByFlashcardId = function(db, flashcardID) {
  let flashcardValues = [flashcardID];
  let queryString = `SELECT * FROM flashcards
                        WHERE flashcards.id = $1`;
  return (
    db
      .query(queryString, flashcardValues)
      .then(res => {
        return res.rows;
      })
      .catch(err => console.log(err))
  );
};

const add = function(db, flashcardInfo) {
  let flashcardValues = [flashcardInfo.deckId, flashcardInfo.];
  let queryString = `INSERT INTO flashcards (decks_id, )
  VALUES ($1,$2) RETURNING *;`;
  return db
    .query(queryString, flashcardValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));

};

const edit = function(db, flashcardInfo) {
  let flashcardValues = [flashcardInfo.,  flashcardInfo.flashcardId];
  let queryString = `UPDATE flashcards SET  = $1
  WHERE flashcards.id = $2 RETURNING *;`;
  return db
    .query(queryString, flashcardValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};
const deleteFlashcard = function(db, flashcardInfo) {
  let flashcardValues = [flashcardInfo.,  flashcardInfo.flashcardId];
  let queryString = `DELETE FROM flashcards WHERE id = $1::integer;`;
  return db
    .query(queryString, flashcardValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};
module.exports = {
  getFlashcardByFlashcardId,
  addFlashcard,
  editFlashcard,
  deleteFlashcard,
};
