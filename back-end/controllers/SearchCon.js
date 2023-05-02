const axios = require("axios");
module.exports.search =  async(req,res)=>{
        const {q } = req.query
        try{
            const options = {
                method: 'GET',
                url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
                params: {
                        q: q,
                        limit :51
                
                },
                headers: {
                  'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
                  'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
                }
              };
                const response = await axios.request(options)
                res.send(response.data.data)

        }catch(e){
                res.send(e.message)
        }
}
module.exports.getdata = async  (req , res)=>{
        try{
                const re = await axios.get('https://api.deezer.com/chart?limit=10')
                res.send(re.data)
        }catch(e){
                res.send(e.message) 
        }
}