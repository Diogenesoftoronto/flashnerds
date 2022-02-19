/*
 * All routes for flashcards are defined here
 * Since this file is loaded in server.js into api/flashcards,
 *   these routes are mounted onto /flashcards
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

const flashcardHelper = require('../db_helpers/flashcardHelper');

module.exports = (db) => {
  router.get("/", (req, res) => {
    flashcardHelper.getAllFlashcards(db)
      .then(dbRes => {
        res.json({ dbRes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  // which one you want deck or deck/:id??
  router.get("/deck", (req, res) => {
    let deckId = req.params.deckId;
    flashcardHelper.getFlashcardsByDeckId(db, deckId)
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
    let flashcardId = req.params.id;
    flashcardHelper.getFlashcardByFlashcardId(db, flashcardId)
      .then((dbRes) => {
        res.json(dbRes);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

 
  // add flashcard route (register)
  router.post("/", (req, res) => {
    const deckId = req.session.deckId;
    const question = req.body.question;
    const answer = req.body.answer;

    const flashcardInfo = {
    deckId,
    question,
    answer
    };

    flashcardsHelper.addFlashcard(db, flashcardInfo)
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
    const deckId = req.session.deckId;
    const question = req.body.question;
    const answer = req.body.answer;
    const likes = req.body.likes;
    const flashcardId = req.body.flashcardId;

    const flashcardInfo = {
    deckId,
    question,
    answer,
    likes,
    flashcardId,
    };
    flashcardsHelper.editFlashcard(db, flashcardInfo)
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
    const flashcardId = req.params.id;
    flashcardsHelper.deleteFlashcard(db, flashcardId).then(() =>  res.json('Delete flashcard by id success, bro!!'))
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });;
  });

  

  return router;
};
