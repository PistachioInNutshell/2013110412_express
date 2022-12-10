var express = require('express');
var router = express.Router();
const companyControllers = require('../controllers/companyControllers')

router.get('/', companyControllers.index)

router.get('/:id', companyControllers.show)

router.post('/', companyControllers.insert)

router.put('/:id', companyControllers.update)

router.delete('/:id', companyControllers.destroy)

router.post("/",companyControllers.insert);

module.exports = router;
