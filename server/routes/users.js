/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

const userHelper = require('../db_helpers/userHelper');

module.exports = (db) => {
  router.get("/", (req, res) => {
    userHelper.getAllUsers(db)
      .then(dbRes => {
        res.json({ dbRes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
    let userId = req.params.id;
    userHelper.getUserNameById(db, userId)
      .then((dbRes) => {
        res.json(dbRes);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:id/credentials", (req, res) => {
    let userId = req.params.id;
    userHelper.getUserEmailNameAndPasswordById(db, userId)
      .then((dbRes) => {
        res.json(dbRes);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:id/profile", (req, res) => {
    let userId = req.params.id;
    userHelper.getUserProfileById(db, userId)
      .then((dbRes) => {
        res.json(dbRes);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  router.post("/find", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const userInfo = {
      email,
      password,
    };
    userHelper
      .getUserByEmailPassword(db, userInfo)
      .then((dbRes) => {
        res.json(dbRes);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  // add user route (register)
  router.post("/", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const image = req.body.image;
    const description = req.body.description;
    const password = req.body.password;

    const userInfo = {
      name,
      email,
      image,
      description,
      password
    };

    userHelper.addUser(db, userInfo)
      .then(dbRes => {
        res.json({ dbRes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.put("/:id", (req, res) => {
    const userId = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    const image = req.body.image;
    const description = req.body.description;
    const password = req.body.password;

    const userInfo = {
      userId,
      name,
      email,
      image,
      description,
      password
    };
    userHelper.editUser(db, userInfo)
      .then(dbRes => {
        res.json({ dbRes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  router.delete("/:id", (req, res) => {
    const userId = req.params.id;
    userHelper.deleteUser(db, userId).then(() =>  res.json('Delete user by id success,bro!!'));
  });

  

  return router;
};
