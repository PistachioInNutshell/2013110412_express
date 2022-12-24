const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
    name    : {type: String, required: true, trim: true },
    price   : {type: Number, },
    shop    : {type: Schema.Types.ObjectId, ref: 'Shop'},
    //createdAt: {type: Date, default: Date.now },
    //updatedAt: {type: Date, default: Date.now },
  }, { 
    toJson:{ virtuals: true},
    timestamps: true,
    collection: "menus"});

menuSchema.virtual('price_vat').get(function(){
    return (this.price * 0.07) + this.price
})

const menu = mongoose.model("Menu", menuSchema)

module.exports = menu

