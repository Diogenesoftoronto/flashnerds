const router = require("express").Router();
const jwt = require('jsonwebtoken');
const verifyToken = require("../middlewares/verifyToken");
const SECRET = "test";

module.exports = () => {
    router.post('/auth/login', (request, response) => {
        const token = jwt.sign({id:1}, SECRET, { expiresIn: '10m'});
        response.json({token, message: 'test'});
    });

    router.post('/auth/test', verifyToken, (request, response) => {
        response.json({message: 'u r authorized'});
    });


    return router;
};