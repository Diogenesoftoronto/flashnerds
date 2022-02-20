const router = require("express").Router();
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verifyToken");
const SECRET = process.env.SECRET;
const axios = require('axios')

module.exports = (userInfo) => {
  router.post("/login", (request, response) => {
      const found = await axios.get("/api/users/find", {params: {userInfo}})
        // if user is not found then return "user not found, please register"
        if (!found.data)
        return response.json({ message: "user not found, please register" });

        const token = jwt.sign({ id: 1 }, SECRET, { expiresIn: "10m" });
        response.json({ token, message: "test" });
  });
  router.post("/test", verifyToken, (request, response) => {
    response.json({ message: "u r authorized" });
  });

  return router;
};
