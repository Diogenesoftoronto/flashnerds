const getUserNameById = function(db, userInfo) {
  let userValues = [userInfo];
  let queryString = `SELECT name FROM users WHERE id = $1;`;
  return db
    .query(queryString, userValues)
    .then(res => res.rows[0])
    .catch(console.error("Error running query to get user name by id from database"));
};

const getUserProfileById = function(db, userInfo) {
  let userValues = [userInfo.id];
  let queryString = `SELECT name, description, image FROM users WHERE id = $1;`;
  return db
    .query(queryString, userValues)
    .then(res => res.rows[0])
    .catch(console.error("Error running query to get user profile by id from database"));
};
const getUserEmailNameAndPasswordById = function(db, userInfo) {
  let userValues = [userInfo.id];
  let queryString = `SELECT name, email, password FROM users WHERE id = $1;`;
  return db
    .query(queryString, userValues)
    .then(res => res.rows[0])
    .catch(console.error("Error running query to get user profile by id from database"));
};

const getAllUsers = function(db) {
  return db
    .query(`SELECT * FROM users;`)
    .then(data => data.rows)
    .catch(console.error("Error running query to get all users from database"));
};
const deleteUserById = function(db, userInfo) {
  let userValues = [userInfo.title,  userInfo.userId];
  let queryString = `DELETE FROM users WHERE id = $1::integer;`;
  return db
    .query(queryString, userValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};
module.exports = {
  getAllUsers,
  getUserNameById,
  getUserProfileById,
  getUserEmailNameAndPasswordById,
  deleteUserById
}