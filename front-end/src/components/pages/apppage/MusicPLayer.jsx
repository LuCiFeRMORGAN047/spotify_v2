import { useMemo, useState , useContext, useEffect } from "react";
import {
  FiRepeat,
  FiShuffle,
  FiVolume,
  FiVolume1,
  FiVolume2,
  FiVolumeX,
  FiSkipBack,
  FiSkipForward,
  FiHeart,
} from "react-icons/fi";
import { MdPlayCircleFilled, MdPauseCircleFilled } from "react-icons/md";
import { MusicContext } from "../../../contexts/MusicProvider";
import axios from "axios";
function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}
const MusicPLayer = () => {
  const { songDetails } = useContext(MusicContext);
  const [play, setPlay] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isLiked, setIsLiked] = useState(false);
  const [playProgress, setPlayProgress] = useState(30);

  const VolumeIcon = useMemo(() => {
    if (volume === 0) return FiVolumeX;
    if (volume <= 20) return FiVolume;
    if (volume <= 75) return FiVolume1;
    if (volume <= 100) return FiVolume2;
  }, [volume]);
useEffect(()=>{
  let audio = document.getElementById('audio')
        if(play===false){
              audio.pause()
              
        }else{
              audio.play()
        }
        audio.volume = volume/100
          if(playProgress===30 && !repeat){
            setPlay(false)
          }
          
},[play, volume,playProgress])
function handleTimeUpdate(event) {
  
  setPlayProgress(Math.floor(event.target.currentTime));
}
const handlelike= async()=>{
    try {
            if(isLiked){
              const user = JSON.parse(window.sessionStorage.getItem('auth')) 
              const res= await axios.post("http://localhost:5000/api/user/unlike", {
                song_id : `${songDetails.id}`,
                username : user.username
              })
              console.log(res)
            }else{
              const user = JSON.parse(window.sessionStorage.getItem('auth')) 
              const res= await axios.post("http://localhost:5000/api/user/like", {
                song_id : `${songDetails.id}`,
                username : user.username
              })
              console.log(res)
            }
    } catch (e) {
            console.log(e.message)
    }
}
  return (
    <div
      id="musicplayer"
      className="w-full bg-neutral-900 fixed bottom-0 border-t-neutral-700 border-t z-[2000] p-4 flex items-center justify-between "
    >
      <div className="flex gap-3 items-center w-56">
        <img
          className=" h-16 rounded-sm aspect-square object-cover shadow-lg shadow-neutral-950"
          src={songDetails.cover!="" ? songDetails.cover: "https://e-cdns-images.dzcdn.net/images/playlist/d41d8cd98f00b204e9800998ecf8427e/250x250.jpg"}
        />
        <div>
          {" "}
          <h3 className="font-semibold text-sm">{songDetails.title}</h3>
          <h4 className="text-xs text-neutral-400 mt-1">{songDetails.artist}</h4>
        </div>
        <div className="ml-4">
          <FiHeart
            onClick={() => {
              handlelike()
              setIsLiked((b) => !b);
            }}
            size={19}
            className={`cursor-pointer active:scale-95 ${
              isLiked ? "fill-emerald-600 text-emerald-600" : ""
            }`}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 items-center ">
        <ul className="flex gap-x-6 items-center list-none  ">
          <li
            onClick={() => {
              setShuffle((b) => !b);
            }}
            className=" active:scale-[0.95]"
          >
            <FiShuffle
              size={16}
              className={`cursor-pointer  ${
                shuffle ? "text-emerald-400" : "text-neutral-400"
              }`}
            />
          </li>
          <li className=" active:scale-[0.95]">
            <FiSkipBack
              size={20}
              className="cursor-pointer text-neutral-400 fill-neutral-400"
            />
          </li>
          <li
            onClick={() => {
              if(play===false&&playProgress===30){
                audio.currentTime = 0
              setPlay(true)
              }else{
                setPlay(!play);
              }
             
            }}
          >
            {play ? (
              <MdPauseCircleFilled size={42} className="cursor-pointer " />
            ) : (
              <MdPlayCircleFilled size={42} className="cursor-pointer " />
            )}
          </li>
          <li className=" active:scale-[0.95]">
            <FiSkipForward
              size={20}
              className="cursor-pointer text-neutral-400 fill-neutral-400"
            />
          </li>
          <li
            onClick={() => {
              setRepeat((b) => !b);
            }}
            className=" active:scale-[0.95]"
          >
            <FiRepeat
              size={16}
              className={`cursor-pointer ${
                repeat ? "text-emerald-400" : "text-neutral-400"
              }`}
            />
          </li>
        </ul>
        <span className="flex gap-x-3 items-center">
          <span className="text-xs w-10 text-end text-neutral-400">
            {formatTime(playProgress)}
          </span>
          <input
            type="range"
            min={0}
            max={30}
            value={playProgress}
            onChange={(e) => {
              
              audio.currentTime = e.target.value;
              
            }}
            className="player accent-emerald-500 w-[30rem] transparent h-1 cursor-pointer appearance-none rounded-full border-transparent bg-neutral-700"
          />
         <span className="text-xs w-10 text-end text-neutral-400">
              {formatTime(30)}
         </span>
        </span>
        <audio loop={repeat} volume={volume} onTimeUpdate={handleTimeUpdate} className="hidden" id="audio"  src={songDetails.audioSrc}/>
      </div>

      <span className="flex items-center gap-x-3 w-52 justify-end">
        <span
          onClick={() => {
            if (volume === 0) {
              setVolume(0.5);
            } else {
              setVolume(0);
            }
          }}
        >
          <VolumeIcon size={18} />
        </span>{" "}
        <input
          type="range"
          min="0"
          max="100"
          className="volume transparent accent-emerald-500 h-1 w-[5rem] cursor-pointer appearance-none rounded-full border-transparent bg-neutral-700"
          onChange={(e) => {
            setVolume(Number(e.currentTarget.value));
          }}
          value={volume}
        />
      </span>
    </div>
  );
};

export default MusicPLayer;
