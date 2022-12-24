const Shop = require('../models/shop')
const menu = require('../models/menu')

exports.index = async (req, res, next) => {

  const shops = await Shop.find().select('name photo location').sort({ _id: '1' })

  const shopWithPhotoDomain = await shops.map( (shop,index) => {
    return {
        id: shop._id,
        name : shop._name,
        photo : 'http://localhost:3000/images/' + shop.photo,
        location : shop._location,
    }
  })

  res.status(200).json({
    data: shopWithPhotoDomain
  })
  //res.send({ data: shop })

  exports.menu = async (req , res, next) => {
    const shop = await Menu.find()
      .select('name price')
      .populate('shop', 'name')
      .sort({ _id: -1 });
    res.send({
      data: shop,
    });
  }
}