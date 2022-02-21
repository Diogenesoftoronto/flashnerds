const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
// const routes = require('./routes');
const auth = require('./routes/auth');
const middlewares = require('./middlewares');
const flashcardRoutes = require("./routes/flashcard");
const userRoutes = require("./routes/users");
const deckRoutes = require("./routes/decks");

const dbParams = require('./lib/db.js');
const Client = require('pg').Client;
const db = new Client(dbParams)
db.connect()
// SERVER SETTINGS + MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

// ROUTES/ENDPOINTS
// Homepage
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', auth(db));

app.use("/api/flashcards", flashcardRoutes(db));
app.use("/api/decks", deckRoutes(db));
app.use("/api/users", userRoutes(db));
// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);

module.exports = app;