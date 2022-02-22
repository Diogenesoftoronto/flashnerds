const auth = require('./auth');
const flashcardRoutes = require("./flashcard");
const userRoutes = require("./users");
const deckRoutes = require("./decks");
const tagRoutes = require("./tags");

module.exports = {
  auth,
  flashcardRoutes,
  userRoutes,
  deckRoutes,
  tagRoutes,
};