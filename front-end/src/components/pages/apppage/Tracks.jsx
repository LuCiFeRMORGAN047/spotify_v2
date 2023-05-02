import React, { useState } from "react";
import { MdPlayCircleFilled as PlayIcon } from "react-icons/md";
import "./appStyles.css";
import { useContext } from "react";
import { MusicContext } from "../../../contexts/MusicProvider";
const Tracks = (props) => {
  const [clicked, setClicked] = useState(false);
  const { playSong } = useContext(MusicContext);
 

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div >
      <h1 className="font-bold tracking-widest text-2xl">{props.title}</h1>
      <div className="grid grid-cols-3 gap-x-4 mt-5 gap-y-4">
        {props.tracks.map((e, i) => {
          
          const handlePlayClick = () => {
            playSong({
              title : e.title,
              artist : e.artist.name,
              id : e.id,
              cover : `https://e-cdns-images.dzcdn.net/images/${type}/${e.md5_image}/250x250.jpg`,
              audioSrc : e.preview ,
              duration : e.duration
            });
          };
          let type = ""
          if(e.type==="playlist"){
            type="playlist"
          }else if (e==="podcast"){
            type="talk"
          }else{
            type="cover"
          }
          let img = `https://e-cdns-images.dzcdn.net/images/${type}/${e.md5_image}/250x250.jpg`
          if(e.type==="podcast"){
            img = e.picture
          }

if(!e.title) return null
          return (
            <div
              key={i}
              className="track bg-neutral-900 hover:bg-neutral-800 transition-colors h-24 rounded-lg flex justify-between  items-center gap-x-4 cursor-pointer"
            >
              <img
                className="h-full  aspect-square object-cover rounded-l-lg"
                src={img}
              />
              <span className="grow text-white font-medium capitalize">
                {e.title}
              </span>
              <PlayIcon
              onClick={handlePlayClick}
                id="play"
                title="play"
                className="play scale-0 mr-3"
                size={56}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tracks;