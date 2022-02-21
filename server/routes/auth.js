const router = require("express").Router();
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verifyToken");
const userHelper = require('../db_helpers/userHelper');
const SECRET = "test";

module.exports = (db) => {
  router.post("/auth/login", async (request, response) => {
      const { userName, password } = request.body;
      if (!userName || !password) {
        return response.status(400).send({ message: "No userName or password" });
      }

      try {
        const user = await userHelper.getUserIdEmailNameAndPasswordByName(db, { name: userName });
        if (!user) {
          return response
            .status(400)
            .send({ message: "User not exist" });
        }

        const validPassword = user.password === password;
        if (!validPassword) {
          return response.status(400).send({ message: "Wrong username or password" });
        }

        const payload = {
          id: user.id,
          name: user.name,
        };

        // データベースのid,pwと照合
        //
        const token = jwt.sign(payload, SECRET, { expiresIn: "10m" });
        response.json({token, message: 'test'});
        // response.status(400).send({ message: "wrong id or pw" });

      } catch (err) {
        return response
          .status(400)
          .send({ message: "Error while processing login!", error: err.message });
      }
  });

  router.post("/auth/test", verifyToken, (request, response) => {
    response.json({ message: "u r authorized" });
  });

  return router;
};
