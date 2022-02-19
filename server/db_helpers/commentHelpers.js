const getCommentByCommentId = function(db, commentID) {
  let commentValues = [commentID];
  let queryString = `SELECT * FROM comments
                        WHERE comments.id = $1`;
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
  let commentValues = [commentInfo.userId, commentInfo.title];
  let queryString = `INSERT INTO comments (user_id, title)
  VALUES ($1,$2) RETURNING *;`;
  return db
    .query(queryString, commentValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));

};

const editComment = function(db, commentInfo) {
  let commentValues = [commentInfo.title,  commentInfo.commentId];
  let queryString = `UPDATE comments SET title = $1
  WHERE comments.id = $2 RETURNING *;`;
  return db
    .query(queryString, commentValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};
const deleteComment = function(db, commentInfo) {
  let commentValues = [commentInfo.title,  commentInfo.commentId];
  let queryString = `DELETE FROM comments WHERE id = $1::integer;`;
  return db
    .query(queryString, commentValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};
module.exports = {
  getCommentByCommentId,
  addComment,
  editComment,
  deleteComment,
};
