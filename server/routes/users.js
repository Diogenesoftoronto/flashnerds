//  all the routes for flashcards

const router = require('express').Router();

router.get("/api/flashcards", (request, response) => {
  if (process.env.TEST_ERROR) {
    setTimeout(() => response.status(500).json({}), 1000);
    return;
  }

  db.query(`SELECT * FROM flashcards WHERE decks_id = $1`, [
    request.params.id
  ]).then(() => {
    setTimeout(() => {
      response.status(204).json({});
      updateAppointment(Number(request.params.id), null);
    }, 1000);
  });
});
router.get("/api/flashcards/:id", (request, response) => {
  if (process.env.TEST_ERROR) {
    setTimeout(() => response.status(500).json({}), 1000);
    return;
  }

  db.query(`SELECT * FROM flashcards WHERE id = $1`, [
    request.params.id
  ]).then(() => {
    setTimeout(() => {
      response.status(204).json({});
      updateAppointment(Number(request.params.id), null);
    }, 1000);
  });
});
router.put("/api/flashcards/:id", (request, response) => {
  if (process.env.TEST_ERROR) {
    setTimeout(() => response.status(500).json({}), 1000);
    return;
  }

  db.query(`UPDATE flashcards SET  WHERE id = $1::integer`, [
    request.params.id
  ]).then(() => {
    setTimeout(() => {
      response.status(204).json({});
      updateAppointment(Number(request.params.id), null);
    }, 1000);
  });
});
router.post("/api/flashcards/:id", (request, response) => {
  if (process.env.TEST_ERROR) {
    setTimeout(() => response.status(500).json({}), 1000);
    return;
  }

  db.query(`DELETE FROM interviews WHERE appointment_id = $1::integer`, [
    request.params.id
  ]).then(() => {
    setTimeout(() => {
      response.status(204).json({});
      updateAppointment(Number(request.params.id), null);
    }, 1000);
  });
});
router.delete("/api/flashcards/:id", (request, response) => {
  if (process.env.TEST_ERROR) {
    setTimeout(() => response.status(500).json({}), 1000);
    return;
  }

  db.query(`DELETE FROM flashcards WHERE id = $1::integer`, [
    request.params.id
  ]).then(() => {
    setTimeout(() => {
      response.status(204).json({});
      updateAppointment(Number(request.params.id), null);
    }, 1000);
  });
});