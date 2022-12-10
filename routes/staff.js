var express = require('express');
var router = express.Router();
const staffController = require('../controllers/staffController')

router.get('/', staffController.index); 

router.get('/:id', staffController.show); 

router.delete('/:id', staffController.destroy); 

router.post('/', staffController.insert);

router.put('/:id', staffController.update);

module.exports = router;