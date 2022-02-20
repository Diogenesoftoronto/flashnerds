const getUserNameById = function(db, userInfo) {
  let userValues = [userInfo];
  let queryString = `SELECT name FROM users WHERE id = $1;`;
  return db
    .query(queryString, userValues)
    .then(res => res.rows[0])
    .catch(console.error("Error running query to get user name by id from database"));
};
const addUser = function (db, userInfo) {
  let userValues = [
    userInfo.name,
    userInfo.email,
    userInfo.image,
    userInfo.description,
    userInfo.password
  ];
  let queryString = `INSERT INTO users (name, email, image, description, password)
  VALUES($1, $2, $3, $4, $5) RETURNING *;`;
  return db
    .query(queryString, userValues)
    .then((res) => res.rows[0])
    .catch((err) => console.log(err));
};

const editUser = function (db, userInfo) {
  let userValues = [
    userInfo.name,
    userInfo.email,
    userInfo.image,
    userInfo.description,
    userInfo.password,
    userInfo.userId
  ];
  let queryString = `UPDATE users SET name = $1, email = $2, image = $3, description = $4, password = $5
  WHERE users.id = $6 RETURNING *;`;
  return db
    .query(queryString, userValues)
    .then((res) => res.rows[0])
    .catch((err) => console.log(err));
};
const getUserProfileById = function(db, userInfo) {
  let userValues = [userInfo.id];
  let queryString = `SELECT name, description, image FROM users WHERE id = $1;`;
  return db
    .query(queryString, userValues)
    .then(res => res.rows[0])
    .catch(console.error("Error running query to get user profile by id from database"));
};
const getUserIdEmailNameAndPasswordByName = function(db, userInfo) {
  let userValues = [userInfo.name];
  let queryString = `SELECT id, name, email, password FROM users WHERE name = $1;`;
  return db
    .query(queryString, userValues)
    .then(res => res.rows[0])
    .catch(console.error("Error running query to get user profile by name from database"));
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
const deleteUser = function(db, userInfo) {
  let userValues = [userInfo.title,  userInfo.userId];
  let queryString = `DELETE FROM users WHERE id = $1;`;
  return db
    .query(queryString, userValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};
module.exports = {
  getAllUsers,
  getUserNameById,
  getUserProfileById,
  addUser,
  editUser,
  getUserIdEmailNameAndPasswordByName,
  getUserEmailNameAndPasswordById,
  deleteUser
}