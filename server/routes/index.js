const auth = require('./routes/auth');
const flashcardRoutes = require("./routes/flashcard");
const userRoutes = require("./routes/users");
const deckRoutes = require("./routes/decks");
const tagRoutes = require("./routes/tags");

module.exports = {
  auth,
  flashcardRoutes,
  userRoutes,
  deckRoutes,
  tagRoutes,
};