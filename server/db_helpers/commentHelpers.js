const getMapByMapId = function(db, mapID) {
  let mapValues = [mapID];
  let queryString = `SELECT * FROM maps
                        WHERE maps.id = $1`;
  return (
    db
      .query(queryString, mapValues)
      .then(res => {
        return res.rows;
      })
      .catch(err => console.log(err))
  );
};

const addMap = function(db, mapInfo) {
  let mapValues = [mapInfo.userId, mapInfo.title];
  let queryString = `INSERT INTO maps (user_id, title)
  VALUES ($1,$2) RETURNING *;`;
  return db
    .query(queryString, mapValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));

};

const editMap = function(db, mapInfo) {
  let mapValues = [mapInfo.title,  mapInfo.mapId];
  let queryString = `UPDATE maps SET title = $1
  WHERE maps.id = $2 RETURNING *;`;
  return db
    .query(queryString, mapValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};
const deleteFlashcard = function(db, flashcardInfo) {
  let flashcardValues = [flashcardInfo.title,  flashcardInfo.flashcardId];
  let queryString = `DELETE FROM flashcards WHERE id = $1::integer;`;
  return db
    .query(queryString, flashcardValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};