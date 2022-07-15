const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    date:{type:String},
    country:{type:String},
    gender:{type:String},

})

module.exports = mongoose.model('users',userSchema)