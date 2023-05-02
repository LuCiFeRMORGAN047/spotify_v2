const mongoose = require('mongoose')
const userSchema =  new mongoose.Schema({
    username : {
        type : String ,
        required : true , 
    } , 
    email :  {
        type : String ,
        required : true , 
        lowercase : true
    }  , 
    password : {
        type : String ,
        required : true,
    } ,
    isPrem : {
        type : Boolean ,
        required : true,
        default : false
    },
    liked : Array ,
})


const User= mongoose.model("users" , userSchema)
module.exports = User