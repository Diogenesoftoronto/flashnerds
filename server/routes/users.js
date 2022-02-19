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
// handle with pedros middleware
  // router.get('/login/:id', (req, res) => {
  //   // cookie-session middleware
  //   req.session.userId = req.params.id;

  //   // cookie-parser middleware
  //   res.cookie('userId', req.params.id);

  //   // json the user somewhere
  //   res.redirect('/');
  // });

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
  // add user route (register)
  router.post("/", (req, res) => {
    const name = req.session.name;
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

    usersHelper.addusers(db, userInfo)
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
    const name = req.session.name;
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
    usersHelper.editUsers(db, userInfo)
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
    usersHelper.deleteuser(db, userId).then(() =>  res.json('Delete user by id success,bro!!'));
  });

  

  return router;
};
