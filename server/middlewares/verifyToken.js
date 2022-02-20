const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


const verifyToken = (req, res, next) => {
  // Si el encabezado de autorización no existe, entonces retornamos con un mensaje de error
  if (!req.headers['authorization']) {
    return res.status(400).send({ message: 'Debes iniciar sesión' });
  }

  // Para extraer el token, se debe acceder al encabezado 'Authorization' (en minúsculas)
  // ----------> req.headers['authorization'] = 'Bearer ELTOKEN'

  // Separamos los elementos del encabezado 'Bearer' y 'ELTOKEN' por medio del espacio ' '
  // ----------> token.split(' ') = ["Bearer", "ELTOKEN"]

  // Tomamos el segundo elemento del arreglo de palabras (posición 1)
  // ----------> token.split(' ')[1] = "ELTOKEN"
  const token = req.headers['authorization'].split(' ')[1];

  if (!token) {
    return res.status(400).send({ message: 'Token de autorización no existe' });
  }

  // Para decodificar y validar un token usamos el método verify(token, secreto)
  jwt.verify(token, SECRET, (err, decoded) => {
    // Si existe algún error durante la verificación del token, retornamos con un mensaje de error
    if (err) {
      return res
        .status(400)
        .send({ message: 'Token de autorización inválido' });
    }
    // En caso que la decodificación del token sea válida, asignamos ese valor al objeto req.token
    req.token = decoded;
    next();
  });
};

module.exports = verifyToken;