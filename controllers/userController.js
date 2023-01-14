const User = require("../models/user")

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
  const {name, email, password} = req.body

  let user = new User();
  user.name = name
  user.email = email
  user.password = await user.encryptPassword(password)

  await user.save()

  res.status(200).json({
    message: "ลงทะเบียนเรียบร้อยแล้ว"
  })
}