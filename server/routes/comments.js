/*
 * All routes for comments are defined here
 * Since this file is loaded in server.js into api/comments,
 *   these routes are mounted onto /comments
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

const commentHelper = require("../db_helpers/commentHelper");

module.exports = (db) => {
  router.get("/", (req, res) => {
    commentHelper
      .getAllComments(db)
      .then((dbRes) => {
        res.json({ dbRes });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
    let commentId = req.params.id;
    commentHelper
      .getCommentByCommentId(db, commentId)
      .then((dbRes) => {
        res.json(dbRes);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // add comment route (register)
  router.post("/", (req, res) => {
    const content = req.session.content;
    const timestamp = req.body.timestamp;
    const flashcardId = req.body.flashcardId;

    const commentInfo = {
      content,
      timestamp,
      flashcardId,
    };

    commentHelper
      .addComment(db, commentInfo)
      .then((dbRes) => {
        res.json({ dbRes });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.put("/:id", (req, res) => {
    const commentId = req.params.id;
    const content = req.session.content;
    const timestamp = req.body.timestamp;
    const flashcardId = req.body.flashcardId;

    const commentInfo = {
      content,
      timestamp,
      flashcardId,
      commentId,
    };

    commentHelper
      .editComment(db, commentInfo)
      .then((dbRes) => {
        res.json({ dbRes });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.delete("/:id", (req, res) => {
    const commentId = req.params.id;
    commentHelper
      .deleteComment(db, commentId)
      .then(() => res.json("Delete comment by id success,bro!!"));
  });

  router.get("/flashcard/:id", (req, res) => {
    const flashcardId = req.params.id;
    commentHelper
      .getCommentsByFlashcardId(db, flashcardId)
      .then((dbRes) => {
        res.json({ dbRes });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  })
  return router;
};
