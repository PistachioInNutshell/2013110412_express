var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/companyController')

router.get('/company', userControllers.company); 

module.exports = router;