/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

const userHelper = require('../db_service/db_helper');

module.exports = (db) => {
  router.get("/", (req, res) => {
    userHelper.getAllUsers(db)
      .then(dbRes => {
        res.render({ dbRes });
      })
      .catch(err => {
        res
          .status(500)
          .render({ error: err.message });
      });
  });
// handle with pedros middleware
  // router.get('/login/:id', (req, res) => {
  //   // cookie-session middleware
  //   req.session.userId = req.params.id;

  //   // cookie-parser middleware
  //   res.cookie('userId', req.params.id);

  //   // send the user somewhere
  //   res.redirect('/');
  // });

  router.get("/:id", (req, res) => {
    let userId = req.params.id;
    userHelper.getUserNameById(db, userId)
      .then((dbRes) => {
        res.render(dbRes);
      })
      .catch(err => {
        res
          .status(500)
          .render({ error: err.message });
      });
  });


  router.get('/:id/favourites', (req, res) => {
    let userId = req.params.id;
    userHelper.getUserFavouriteMaps(db, userId).then(dbRes => res.json(dbRes))
      .catch(err => {
        res
          .status(500)
          .render({ error: err.message });
      });
  });

  router.post('/:id/favourites', (req, res) => {
    let userId = req.params.id;
    let dataObj = req.body;

    let newObj = {
      userId: userId,
      dataObj: dataObj,
    };

    userHelper.addUserFavouriteMap(db, newObj).then((dbRes) => {
      res.render(dbRes);
    });
  });

  router.patch('/:id/favourites/:favId', (req, res) => {
    let userId = req.params.id;
    let favId = req.params.favId;
    let dataObj = req.body;
    let editObj = {
      userId: userId,
      favId: favId,
      dataObj,
    };
    console.log(editObj);
    userHelper.editUserFavouriteMap(db, editObj).then((dbRes) => {
      res.render(dbRes);
    });
  });

  return router;
};
