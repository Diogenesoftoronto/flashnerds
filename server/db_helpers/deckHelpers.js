const getDeckByDeckID = function(db, deckIgetDeckBydeckID) {
  let deckValues = [deckID];
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
  let deckValues = [deckInfo.userId, deckInfo.name];
  let queryString = `INSERT INTO decks (user_id, name)
  VALUES ($1,$2) RETURNING *;`;
  return db
    .query(queryString, deckValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));

};

const editDeck = function(db, deckInfo) {
  let deckValues = [deckInfo.name,  deckInfo.deckIgetDeckBydeckID];
  let queryString = `UPDATE decks SET name = $1
  WHERE decks.id = $2 RETURNING *;`;
  return db
    .query(queryString, deckValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};
const deleteDeck = function(db, deckInfo) {
  let deckValues = [deckInfo.name,  deckInfo.deckID];
  let queryString = `DELETE FROM decks WHERE id = $1::integer;`;
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
