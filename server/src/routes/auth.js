const router = require("express").Router();
const jwt = require('jsonwebtoken');
const SECRET = "test";

module.exports = () => {
  router.post("/auth/login", (request, response) => {
    const token = jwt.sign({id:1}, SECRET, { expiresIn: '10m' });
    response.json({token, message: 'test'});
  });

  return router;
};