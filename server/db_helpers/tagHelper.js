const getAllTags = (db) => {
  const queryString = `SELECT * FROM tags;`;
return db
.query(queryString, tagValues)
.then((res) => {
return res.rows;
})
};
const getTagsByName = (db, tagValues) => {
  const tagValues = [name];
  const queryString = `SELECT * FROM tags
  WHERE name = $1;`;
return db
.query(queryString, tagValues)
.then((res) => {
return res.rows;
})
.catch((err) => console.log(err));
};
const getTagsByFlashcardId = function (db, flashcardId) {
  let tagValues = [flashcardId];
  let queryString = `SELECT * FROM tags
                        WHERE flashcards_id = $1;`;
  return db
    .query(queryString, tagValues)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => console.log(err));
};


const getTagByTagId = function (db, tagId) {
  let tagValues = [tagId];
  let queryString = `SELECT * FROM tags
                        WHERE tags.id = $1;`;
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
  let tagValues = [tagInfo.name, tagInfo.flashcardsId, tagInfo.tagId];
  let queryString = `UPDATE tags SET name = $1, flashcards_id = $2
  WHERE tags.id = $3 RETURNING *;`;
  return db
    .query(queryString, tagValues)
    .then((res) => res.rows[0])
    .catch((err) => console.log(err));
};
const deleteTag = function (db, tagId) {
  let tagValues = [tagId];
  let queryString = `DELETE FROM tags WHERE id = $1::integer;`;
  return db
    .query(queryString, tagValues)
    .then((res) => res.rows[0])
    .catch((err) => console.log(err));
};
module.exports = {
  getAllTags,
  getTagsByName,
  getTagsByFlashcardId,
  getTagByTagId,
  addTag,
  editTag,
  deleteTag
};
