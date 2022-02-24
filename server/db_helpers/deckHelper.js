const getAllDecks = function (db) {
  return db
    .query(`SELECT * FROM decks;`)
    .then((data) => data.rows)
    .catch(console.error("Error running query to get all decks from database"));
};

const getDeckByDeckId = function (db, deckId) {
  let deckValues = [deckId];
  let queryString = `SELECT * FROM decks
                        WHERE decks.id = $1;`;
  return db
    .query(queryString, deckValues)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => console.log(err));
};

const getDecksByUserId = function (db, userId) {
  let userValues = [userId];
  let queryString = `SELECT * FROM decks
                        WHERE users_id = $1;`;
  return db
    .query(queryString, userValues)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => console.log(err));
};

const addDeck = function (db, deckInfo) {
  let deckValues = [
    deckInfo.userId, 
    deckInfo.name,
     deckInfo.image
    ];
  let queryString = `INSERT INTO decks (users_id, name, image)
  VALUES ($1,$2,$3) RETURNING *;`;
  return db
    .query(queryString, deckValues)
    .then((res) => res.rows[0])
    .catch((err) => console.log(err));
};

const editDeck = function (db, deckInfo) {
  let deckValues = [
    deckInfo.name,
    deckInfo.userId,
    deckInfo.image,
    deckInfo.deckId,
  ];
  let queryString = `UPDATE decks SET name = $1, users_id = $2, image = $3
  WHERE decks.id = $4 RETURNING *;`;
  return db
    .query(queryString, deckValues)
    .then((res) => res.rows[0])
    .catch((err) => console.log(err));
};
const deleteDeck = function (db, deckId) {
  let deckValues = [deckId];
  let queryString = `DELETE FROM decks WHERE id = $1;`;
  return db
    .query(queryString, deckValues)
    .then((res) => res.rows[0])
    .catch((err) => console.log(err));
};
module.exports = {
  getAllDecks,
  getDeckByDeckId,
  addDeck,
  editDeck,
  deleteDeck,
  getDecksByUserId
};
