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

}

exports.menu = async (req , res, next) => {

  //const menu = await Menu.find().select('+name -price')
  //const menu = await Menu.find().select('+name -price').where('price').gt(100)
  const menu = await menu.find().populate('shop')
  /*const shop = await Menu.find()
    .select('name price')
    .populate('shop', 'name')
    .sort({ _id: -1 });*/

  res.status(200).json({
    data: menu,
  });
}

exports.show = async (req, res, next) => {

  try{
      const shop = await Shop.findById(req.params.id).populate('menus');

      if(!shop){
          const error = new Error('ไม่พบร้านที่ค้นหา')
          error.statusCode = 400
          throw error
      }
      else{
          res.status(200).json({
              data: shop,
          })
      } 

  }catch (error){
      next(error)
  }
}