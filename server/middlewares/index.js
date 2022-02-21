const verifyToken = require("../middlewares/verifyToken");
const notFound = require("../middlewares/notFound");
const errorHandler = require("../middlewares/errorHandler");

module.exports = {
  verifyToken,
  notFound,
  errorHandler,
};