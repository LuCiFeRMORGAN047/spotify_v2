const User = require('../models/User')
const bycrypt = require('bcrypt')

module.exports.signup_user = async(req , res)=>{
   const {username , email , password} = req.body
   try{
         const salt = await bycrypt.genSalt()
         const hashed = await bycrypt.hash(password,salt)
         const check = await User.findOne({username})
         if(check){
            res.status(301).json({
               error : "user already exists"
            })
         }else{
            const response = await new User({email,password : hashed,username}).save()
            
            res.status(200).json({username:response.username , id : response._id ,isPrem : false , status : "success"})

         }

        
   }catch(e){
         res.send(e.message)
   }
}
module.exports.login_user = async(req, res)=>{
   const {username , password} = req.body
   try{
         const user = await User.findOne({username})
         if(!user){
            res.send({
               error : "user does not exit"
            })
         }else{
            const auth = await bycrypt.compare(password, user.password)
            if(auth){
               
               res.status(200).json({id : user._id , username: user.username , isPrem : user.isPrem , message :"success"})
            }else{
               res.send({
                  error: "password is incorrect"
               })
               console.log("hey error")
            }
         }
   }catch(e){
         res.send(e.message)
   }
}
module.exports.logout = async(req, res)=>{
   
   req.session.destroy()
}