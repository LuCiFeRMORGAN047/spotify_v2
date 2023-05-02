const { default: axios } = require('axios')
const Playlist = require('../models/Playlist')
const User = require('../models/User')
module.exports.Create_playlist = async (req, res)=>{
    const {name , username } = req.body
    try{
       const check = await  Playlist.findOne({username , name})
       if(check){
                res.send({
                    error : "you can not name two playlist with the same name"
                })
       }else{
        const response = await new Playlist({name , username}).save()
        res.status(200).json({
            status : "success",
            message : "playlist created"
        })
       }
       
    }catch(e){
            res.send(e.message)
    }
}
module.exports.Delete_playlist= async (req,res)=>{
    const {name , username } = req.body
    try {
        const check = await  Playlist.findOne({username , name})
        if(!check){
                res.send({
                    error : "playlist does not exist"
                })
        }else{
            const response = await Playlist.deleteOne({name , username})
            if(response.deletedCount!=0){
                res.status(200).json({
                    status : "success",
                    message : "playlist deleted successfuly"
                })
            }
        }
       }catch(e){
                res.send(e.message)
       }
}
module.exports.like = async (req ,res)=>{
    const {song_id , username} = req.body
    try{
            const user = await User.findOne({username})
        const filtred = user.liked.filter((e)=>(
            e===song_id
        ))
        if(filtred.length===0){
            const response = await User.updateOne({username},{
                $set :{
                    liked : [...user.liked , song_id]
                }
                
            })
            res.status(200).json({
                message : "liked"
            })
        }else{
            res.send({
                error : "song already exist"
            })
        }
            

    }catch(e){
        res.send(e.message)
    }
}
module.exports.unlike = async (req ,res)=>{
    const {song_id , username} = req.body
    try{
            const user = await User.findOne({username})
        const filtred = user.liked.filter((e)=>(
            e!=song_id
        ))
        const response = await User.updateOne({username},{
                $set :{
                    liked : filtred
                }
                
            })
            res.status(200).json({
                message :"unliked"
            })
       
            

    }catch(e){
        res.send(e.message)
    }
}
module.exports.getplaylist = async (req, res)=>{
    const {username} = req.body
    try{
        const response = await Playlist.find({username : username})
          const na=   response.map((e)=>{
                return e.name
            })
        res.send(na)
    }catch(e){
            console.log(e.message)
    }
}
module.exports.getlikedsongs = async (req, res) => {
    const { username } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        res.status(404).json({
          message: "user does not exist",
        });
      } else {
        const options = {
          method: "GET",
          url: "https://deezerdevs-deezer.p.rapidapi.com/track/",
          headers: {
            "content-type": "application/octet-stream",
            "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          },
        };
  
        const song = user.liked.map(async (e) => {
          const re = await axios.request({
            ...options,
            url: `https://deezerdevs-deezer.p.rapidapi.com/track/${e}`,
          });
          return re.data;
        });
        
        const results = await Promise.all(song);
  
       console.log(results)
       res.send(results);
       
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  