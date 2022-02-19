const getTagByTagId = function (db, tagID) {
  let tagValues = [tagID];
  let queryString = `SELECT * FROM tags
                        WHERE tags.id = $1`;
  return db
    .query(queryString, tagValues)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => console.log(err));
};

const addTag = function (db, tagInfo) {
  let tagValues = [tagInfo.flashcardId, tagInfo.name];
  let queryString = `INSERT INTO tags (flashcards_id, name)
  VALUES ($1,$2) RETURNING *;`;
  return db
    .query(queryString, tagValues)
    .then((res) => res.rows[0])
    .catch((err) => console.log(err));
};

const editTag = function (db, tagInfo) {
  let tagValues = [tagInfo.name, tagInfo.tagId];
  let queryString = `UPDATE tags SET name = $1
  WHERE tags.id = $2 RETURNING *;`;
  return db
    .query(queryString, tagValues)
    .then((res) => res.rows[0])
    .catch((err) => console.log(err));
};
const deleteTag = function (db, tagInfo) {
  let tagValues = [tagInfo.title, tagInfo.tagId];
  let queryString = `DELETE FROM tags WHERE id = $1::integer;`;
  return db
    .query(queryString, tagValues)
    .then((res) => res.rows[0])
    .catch((err) => console.log(err));
};
module.exports = {
  getTagByTagId,
  addTag,
  editTag,
  deleteTag,
};
