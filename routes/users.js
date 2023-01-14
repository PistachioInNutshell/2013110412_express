var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/userController')

/* GET users listing. */
router.get('/', userControllers.index);

router.get('/bio', userControllers.bio); 

router.post('/', userControllers.register);

module.exports = router;
