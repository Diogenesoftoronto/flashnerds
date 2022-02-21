const app = require('./app');
<<<<<<< HEAD
const port = process.env.DB_PORT || 3002;
=======
const port = process.env.PORT || 3001;
>>>>>>> 82f4d90bb981964f47e4fe4b53ace9e5ad4e6062

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})