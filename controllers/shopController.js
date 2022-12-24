const Shop = require('../models/shop')

exports.index = async (req, res) => {
  const staff = await Staff.find().sort({ _id: '1' })
  res.send({ data: staff })
}