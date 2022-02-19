const express = require('express')
// const app = express()
const app = require('./app');
const port = 3001
const usersRoutes = require("./routes/users");

app.use("/api/users", usersRoutes(db));
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})