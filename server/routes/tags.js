/*
 * All routes for tags are defined here
 * Since this file is loaded in server.js into api/tags,
 *   these routes are mounted onto /tags
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

const tagHelper = require("../db_helpers/tagHelper");

module.exports = (db) => {
  router.get("/", (req, res) => {
    tagHelper
      .getAllTags(db)
      .then((dbRes) => {
        res.json({ dbRes });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
    let tagId = req.params.id;
    tagHelper
      .getTagByTagId(db, tagId)
      .then((dbRes) => {
        res.json(dbRes);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  router.get("/name/:name", (req, res) => {
    let name = req.params.name;
    tagHelper
      .getTagsByName(db, name)
      .then((dbRes) => {
        res.json(dbRes);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  // add tag route (register)
  router.post("/", (req, res) => {
    const name = req.body.name;
    const flashcardId = req.body.flashcardId;

    const tagInfo = {
      name,
      flashcardId,
    };

    tagHelper
      .addtag(db, tagInfo)
      .then((dbRes) => {
        res.json({ dbRes });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.put("/:id", (req, res) => {
    const tagId = req.params.id;
    const name = req.body.name;
    const flashcardId = req.body.flashcardId;

    const tagInfo = {
      name,
      flashcardId,
      tagId,
    };

    tagHelper
      .editTag(db, tagInfo)
      .then((dbRes) => {
        res.json({ dbRes });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.delete("/:id", (req, res) => {
    const tagId = req.params.id;
    tagHelper
      .deleteTag(db, tagId)
      .then(() => res.json("Delete tag by id success,bro!!"));
  });

  return router;
};
