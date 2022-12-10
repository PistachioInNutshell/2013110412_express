var express = require('express');
var router = express.Router();
const companyControllers = require('../controllers/companyControllers')

router.get('/', companyControllers.index); 

module.exports = router;
