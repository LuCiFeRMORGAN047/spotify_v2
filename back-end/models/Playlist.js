const mongoose = require('mongoose')
const playlistSchema =  new mongoose.Schema({
    username : {
        type : String ,
        required : true , 
    } ,
    name : {
         type:   String ,
            required : true
    },
    songs : {
        type : Array ,
        required : true
    }
   
})


const Playlist= mongoose.model("playlists" , playlistSchema)
module.exports = Playlist