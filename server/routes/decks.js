/*
 * All routes for Points are defined here
 * Since this file is loaded in server.js into api/maps,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const pointsHelper = require('../db_service/db_helper');


module.exports = (db) => {

  router.post("/:mapId", (req, res) => {
    const user_id = req.session.userId;
    const map_id = req.params.mapId;
    const title = req.body.title;
    const image = req.body.image;
    const description = req.body.description;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;

    const pointInfo = {
      user_id,
      map_id,
      title,
      image,
      description,
      latitude,
      longitude
    };

    pointsHelper.addPoints(db, pointInfo)
      .then(dbRes => {
        res.json({ dbRes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.patch("/:id", (req, res) => {
    const pointId = req.params.id;

    const map_id = req.params.mapId;
    const title = req.body.title;
    const image = req.body.image;
    const description = req.body.description;
    const latitude = req.body.latitude;
    const longtitude = req.body.longtitude;

    const pointValues = {
      map_id,
      title,
      image,
      description,
      latitude,
      longtitude,
      pointId
    };
    pointsHelper.editPoints(db, pointValues)
      .then(dbRes => {
        res.render({ dbRes });
      })
      .catch(err => {
        res
          .status(500)
          .render({ error: err.message });
      });
  });


  router.delete("/:id", (req, res) => {
    const pointId = req.params.id;
    pointsHelper.deletePoint(db, pointId).then(() =>  res.send('Delete Point by id success,bro!!'));
  });
  return router;
};