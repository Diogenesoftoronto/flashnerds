/*
 * All routes for tags are defined here
 * Since this file is loaded in server.js into api/tags,
 *   these routes are mounted onto /tags
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

const tagHelper = require('../db_helpers/tagHelper');

module.exports = (db) => {
  router.get("/", (req, res) => {
    tagHelper.getAllTags(db)
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
    let tagId = req.params.id;
    tagHelper.gettagNameById(db, tagId)
      .then((dbRes) => {
        res.json(dbRes);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // add tag route (register)
  router.post("/", (req, res) => {
    const name = req.session.tagId;
    const email = req.body.title;
    const image = req.body.image;
    const description = req.body.description;
    const password = req.body.latitude;

    const tagInfo = {
      name,
      email,
      image,
      description,
      password
    };

    tagsHelper.addtags(db, tagInfo)
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
    const tagId = req.params.id;
    const name = req.session.tagId;
    const email = req.body.title;
    const image = req.body.image;
    const description = req.body.description;
    const password = req.body.latitude;

    const tagInfo = {
      tagId,
      name,
      email,
      image,
      description,
      password
    };
    tagsHelper.edittags(db, tagInfo)
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
    const tagId = req.params.id;
    tagsHelper.deletetag(db, tagId).then(() =>  res.json('Delete tag by id success,bro!!'));
  });

  

  return router;
};
