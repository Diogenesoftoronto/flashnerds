//  all the routes for flashcards

const router = require("express").Router();
module.exports = (db) => {
  router.get("/flashcards", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }

    db.query(`SELECT * FROM flashcards WHERE decks_id = $1`, [
      request.params.id,
    ]).then(() => {
      setTimeout(() => {
        response.status(204).json({});
        updateFlashcards(Number(request.params.id), null);
      }, 1000);
    });
  });
  router.get("/flashcards/:id", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }

    db.query(`SELECT * FROM flashcards WHERE id = $1`, [
      request.params.id,
    ]).then(() => {
      setTimeout(() => {
        response.status(204).json({});
        updateFlashcards(Number(request.params.id), null);
      }, 1000);
    });
  });
  router.put("/flashcards/:id", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }

    db.query(`UPDATE  WHERE id = $1::integer`, [request.params.id]).then(() => {
      setTimeout(() => {
        response.status(204).json({});
        updateFlashcards(Number(request.params.id), null);
      }, 1000);
    });
  });
  router.post("/flashcards/:id", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }

    db.query(`DELETE FROM interviews WHERE flashcards_id = $1::integer`, [
      request.params.id,
    ]).then(() => {
      setTimeout(() => {
        response.status(204).json({});
        updateFlashcards(Number(request.params.id), null);
      }, 1000);
    });
  });
  router.delete("/flashcards/:id", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }

    db.query(`DELETE FROM flashcards WHERE id = $1::integer`, [
      request.params.id,
    ]).then(() => {
      setTimeout(() => {
        response.status(204).json({});
        updateFlashcards(Number(request.params.id), null);
      }, 1000);
    });
  });
