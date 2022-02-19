const getDeckByDeckID = function(db, deckId) {
  let deckValues = [deckId];
  let queryString = `SELECT * FROM decks
                        WHERE decks.id = $1`;
  return (
    db
      .query(queryString, deckValues)
      .then(res => {
        return res.rows;
      })
      .catch(err => console.log(err))
  );
};

const addDeck = function(db, deckInfo) {
  let deckValues = [deckInfo.userId, deckInfo.name,  deckInfo.image];
  let queryString = `INSERT INTO decks (user_id, name, image)
  VALUES ($1,$2,$3) RETURNING *;`;
  return db
    .query(queryString, deckValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));

};

const editDeck = function(db, deckInfo) {
  let deckValues = [deckInfo.name,  deckInfo.userId, deckInfo.image, deckInfo.deckId];
  let queryString = `UPDATE decks SET name = $1, user_id = $2, image = $3
  WHERE decks.id = $4 RETURNING *;`;
  return db
    .query(queryString, deckValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};
const deleteDeck = function(db, deckId) {
  let deckValues = [deckId];
  let queryString = `DELETE FROM decks WHERE id = $1;`;
  return db
    .query(queryString, deckValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};
module.exports = {
  getDeckByDeckID,
  addDeck,
  editDeck,
  deleteDeck,
};
