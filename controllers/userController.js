const User = require("../models/user")

const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken")

const config = require('../config/index')

exports.index = (req, res, next) => {
    res.status(200).json(
      //{fullname: 'Kittinan Kampusa'}
      company)
  }

exports.bio = (req, res, next) => {
    res.status(200).json(
      {fullname : 'Kittinan Kampusa',
      nickname  : 'Nun',
      hobby     : 'Gaming',
      gitusername : 'PistachioInNutshell'})
  }

exports.register = async (req, res, next) => {
  try{
    const {name, email, password} = req.body

    const existEmail = await User.findOne({email:email})

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("received incorrect information!")
      error.statusCode = 422
      error.validation = errors.array()
      throw error
    }

    if (existEmail){
      const error = new Error("อีเมลนี้มีผู้ใช้งานในระบบแล้ว")
      error.statusCode = 400
      throw error;
    }

    let user = new User();
    user.name = name
    user.email = email
    user.password = await user.encryptPassword(password)

    await user.save()

    res.status(201).json({
      message: "ลงทะเบียนเรียบร้อยแล้ว"
    })

  } catch (error){
    next(error)
  }

  exports.login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      /// validation
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        const error = new Error("ข้อมูลที่ได้รับมาไม่ถูกต้อง");
        error.statusCode = 422;
        error.validation = errors.array();
        throw error;
      }
  
      /// check email
      const user = await User.findOne({ email: email });
  
      if (!user) {
        const error = new Error("ไม่พบผู้ใช้งาน");
        error.statusCode = 404;
        throw error;
      }
  
      const isValid = await user.checkPassword(password)
      if (!isValid) {
        const error = new Error("รหัสผ่านไม่ถูกต้อง");
        error.statusCode = 401;
        throw error;
      }
  
      /// create token
      const token = await jwt.sign({
        id: user._id,
        role: user.role,
      }, 
      config.TOKEN
      , { expiresIn: "5 days"})
  
      const expires_in = jwt.decode(token)
  
      res.status(200).json({
        access_token: token,
        expires_in: expires_in.exp,
        token_type: 'Beaere'
  
      });
  
    } catch (error) {
      next(error);
    }
  };

  exports.profile = (req, res, next) => {

    const {role, name, email} =  req.user

    res.status(200).json({
      name: name,
      email: email,
      role: role,
    })
  }
  
}