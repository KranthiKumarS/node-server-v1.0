const express = require ('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send("<h1>Welcome to express router world!</h1>");
});

router.get('/admin', function(req, res){
    res.send("<h5>Welcome Admin</h5>");
});

module.exports = router;