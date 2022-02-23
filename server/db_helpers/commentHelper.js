const getAllComments = function (db) {
  return db
    .query(`SELECT * FROM comments;`)
    .then((data) => data.rows)
    .catch(console.error("Error running query to get all comments from database"));
};

const getCommentsByFlashcardId = function (db, flashcardId) {
  let commentValues = [flashcardId];
  let queryString = `SELECT * FROM comments
                        WHERE flashcards_id = $1;`;
  return db
    .query(queryString, commentValues)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => console.log(err));
};

const getCommentByCommentId = function(db, commentId) {
  let commentValues = [commentId];
  let queryString = `SELECT * FROM comments
                        WHERE comments.id = $1
                        ORDER BY post_time;`;
  return (
    db
      .query(queryString, commentValues)
      .then(res => {
        return res.rows;
      })
      .catch(err => console.log(err))
  );
};

const addComment = function(db, commentInfo) {
  let commentValues = [commentInfo.content, commentInfo.timestamp, commentInfo.flashcardId];
  let queryString = `INSERT INTO comments (content, timestamp, flashcard_id)
  VALUES ($1, $2, $3) RETURNING *;`;
  return db
    .query(queryString, commentValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));

};

const editComment = function(db, commentInfo) {
  let commentValues = [commentInfo.content, commentInfo.timestamp, commentInfo.flashcardId,  commentInfo.commentId];
  let queryString = `UPDATE comments SET content = $1,timestamp = $2, flashcards_id = $3
  WHERE comments.id = $4 RETURNING *;`;
  return db
    .query(queryString, commentValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};
const deleteComment = function(db, commentId) {
  let commentValues = [commentId];
  let queryString = `DELETE FROM comments WHERE id = $1;`;
  return db
    .query(queryString, commentValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};
module.exports = {
  getAllComments,
  getCommentsByFlashcardId,
  getCommentByCommentId,
  addComment,
  editComment,
  deleteComment,
};
