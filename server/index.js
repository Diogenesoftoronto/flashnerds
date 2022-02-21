const app = require('./app');
const port = process.env.DB_PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})