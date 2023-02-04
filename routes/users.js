var express = require('express');
var router = express.Router();
const { body } = require("express-validator")
const userControllers = require('../controllers/userController')

/* GET users listing. */
router.get('/', userControllers.index);

router.get('/bio', userControllers.bio); 

router.post("/" ,[
    body('name').not().isEmpty().withMessage("Please Enter you frist-last name."),
    body('email').not().isEmpty().withMessage("Please Enter Email.").isEmail().withMessage("Email not match"),
    body('password').not().isEmpty().withMessage("Please Enter Password.").isLength({ min: 5 }).withMessage("Password should have more than 5 character.")
], userControllers.register)


router.post('/login', userControllers.login);


module.exports = router;
