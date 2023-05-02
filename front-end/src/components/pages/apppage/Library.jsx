import React, { useEffect, useState } from 'react'
import AppLayout from './AppLayout'
import axios from 'axios'

const Library = () => {
  const [data , seData] = useState([])
  async function getdata(){
    try {
      const user = JSON.parse(window.sessionStorage.getItem('auth')) 
             const res = await axios.post('http://localhost:5000/api/user/getplaylists',{
               username : user.username
             })
             seData(res.data)
             console.log(res.data)
           } catch (e) {
              console.log(e.message)
           }
    } 
  useEffect(()=>{
      getdata()
  },[])
  return (
    <AppLayout>
        
        <div >
     <h1 className="font-bold tracking-widest text-2xl">Library</h1>
      <div className="grid grid-cols-3 gap-x-4 mt-5 gap-y-4">
        {data.map((e, i) => {
          
      
          return (
            <div
              key={i}
              className="track bg-neutral-900 hover:bg-neutral-800 transition-colors h-24 rounded-lg flex justify-between  items-center gap-x-4 cursor-pointer"
            >
              <img
                className="h-full  aspect-square object-cover rounded-l-lg"
                src='https://e-cdns-images.dzcdn.net/images/playlist/d41d8cd98f00b204e9800998ecf8427e/250x250.jpg'
              />
              <span className="grow text-white font-medium capitalize">
                {e}
              </span>
              
            </div>
          );
        })}
      </div>
    </div>
    </AppLayout>
  )
}

export default Library