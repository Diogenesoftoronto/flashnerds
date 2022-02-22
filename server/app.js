require("dotenv").config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const {auth, tagRoutes, flashcardRoutes, deckRoutes, userRoutes} = require('./routes');
const {verifyToken} = require('./middlewares');


const dbParams = require('./lib/db');
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
// ONLY ADMINS SHOULD BE ABLE TO DELETE AND ADD USERS. NO ONE ELSE. 
app.use('/api', auth(db));
app.use("/api/tags", tagRoutes(db));
app.use("/api/flashcards", flashcardRoutes(db));
app.use("/api/decks", deckRoutes(db));
app.use("/api/users", userRoutes(db));

// app.use("/api/tags", verifyToken, tagRoutes(db));
// app.use("/api/flashcards", verifyToken, flashcardRoutes(db));
// app.use("/api/decks", verifyToken, deckRoutes(db));
// app.use("/api/users", verifyToken, userRoutes(db));
// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);

module.exports = app;