/*
 * All routes for decks are defined here
 * Since this file is loaded in server.js into api/decks,
 *   these routes are mounted onto /decks
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

const deckHelper = require('../db_helpers/deckHelper');

module.exports = (db) => {
  router.get("/", (req, res) => {
    deckHelper.getAllDecks(db)
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
    let deckId = req.params.id;
    deckHelper.getDeckByDeckId(db, deckId)
      .then((dbRes) => {
        res.json(dbRes);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // add deck route (register)
  router.post("/", (req, res) => {
    const userId = req.session.userId;
    const name = req.body.name;
    const image = req.body.image;

    const deckInfo = {
      userId, name, image
    };

    deckHelper.addDeck(db, deckInfo)
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
    const deckId = req.params.id;
    const userId = req.session.userId;
    const name = req.body.name;
    const image = req.body.image;

    const deckInfo = {
      userId, name, image, deckId
    };

    deckHelper.editDeck(db, deckInfo)
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
    const deckId = req.params.id;
    deckHelper.deleteDeck(db, deckId).then(() =>  res.json('Delete deck by id success,bro!!'));
  });

  

  return router;
};
