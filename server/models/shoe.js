const mongoose = require('mongoose')

const shoeSchema = mongoose.Schema({
        imageLink:{type:String},
        shoename:{type:String},
        shoecat:{type:String},
        shoecolor:{type:String},
        shoeprice:{type:String},
        shoediscount:{type:String},
        displayPhotos:[{type:String}]      
})

module.exports = mongoose.model("shoes",shoeSchema)