import React, { useEffect, useState } from "react";
import { FiHome, FiHeart, FiSearch } from "react-icons/fi";
import { MdAddCircle as PlusIcon } from "react-icons/md";
import { BiLibrary } from "react-icons/bi";
import { IoMdClose, IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";


const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [lists, setPlaylist] = useState([
    "Beast Mode",
    "ESL CS:GO Playlist",
    "This Is Pop Smoke",
    "Rap Caviar",
    "Lyfë",
  ]);


  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);
  const user = JSON.parse(window.sessionStorage.getItem('auth')) 
  const handleCreateplay = async ()=>{
    try {
      
          const res = await axios.post("http://localhost:5000/api/user/createplaylist",{
            username : user.username,
            name: name
          })
          setPlaylist((e) => [...e, name]);
          setShowModal(false);
          console.log(res.data)
    } catch (e) {
      console.log(e.message)
    }
  }
  async function getdata(){
    try {
             const res = await axios.post('http://localhost:5000/api/user/getplaylists',{
               username : user.username
             })
             setPlaylist([...lists,...res.data])
             console.log(res.data)
           } catch (e) {
              console.log(e.message)
           }
    }      
useEffect(()=>{
 getdata()
 
},[])
  return (
    <>

      <Link to={"/app"} className=" text-3xl mt-4 font-bold text-transparent bg-clip-text  bg-gradient-to-l from-emerald-700 to-green-500">
        Spotify
      </Link>
      <ul className=" list-none mt-12  flex  flex-col gap-y-2">
        <Link to='/app'> <li className="flex gap-x-2 items-center cursor-pointer">
          {" "}
          <span className="p-1">
            <FiHome size={20} />
          </span>
          Home
        </li>
        </Link>
       
        <Link to='/app/search'> 
        <li className="flex gap-x-2 items-center cursor-pointer  ">
          {" "}
          <span className="p-1">
            <FiSearch size={20} />
          </span>
          Search
        </li>
        </Link>
       <Link to="/app/library">
       <li className="flex gap-x-2 items-center cursor-pointer">
          {" "}
          <span className="p-1">
            <BiLibrary size={20} />
          </span>
          Library
        </li>
       </Link>
       
      </ul>
      <ul className="mt-8 flex flex-col gap-y-2">
        <li
          onClick={() => {
            setShowModal(true);
          }}
          className="flex  gap-x-2 items-center cursor-pointer   "
        >
          {" "}
          <span className="p-1 bg-gradient-to-tr from-purple-700 to-pink-600 rounded-sm">
            {" "}
            <PlusIcon size={20} />
          </span>
          Create Playlist
        </li>
        <Link to={"/app/liked"}>
        <li className="flex gap-x-2 items-center cursor-pointer  ">
          {" "}
          <span className="p-1 bg-gradient-to-tr from-emerald-700 to-green-500 rounded-sm">
            <FiHeart fill="white" size={20} />
          </span>
          Liked songs
        </li>
        </Link>
      
      </ul>
      <hr className="mt-8 mb-4 border-neutral-700" />
      <ul className="flex my-playlists flex-col gap-y-2 overflow-y-scroll h-full">
        {lists.map((list, i) => {
          return (
            <li
              className="text-sm font-light flex justify-between items-center cursor-pointer active:scale-[0.98] "
              key={i}
            >
              <span>{list}</span>
            </li>
          );
        })}
      </ul>
      {showModal ? (
        <>
          <div className="flex bg-neutral-900 bg-opacity-50 justify-center top-0 items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[2000] backdrop-blur-md      ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral-800 h-[15rem] ">
                <div className="flex items-center  justify-between p-5 border-b border-solid  w-[30rem] ">
                  <h3 className="text-lg  text-gray-100 font-semibold ">
                    Create a playlist
                  </h3>
                  <button
                    className="bg white"
                    onClick={() => setShowModal(false)}
                  >
                    <IoMdClose size={30} />
                  </button>
                </div>
                <div className="flex flex-col">
                  <div
                    className="p-5 flex flex-col
                gap-y-1
    "
                  >
                    <label className="block text-sm font-medium leading-6 text-neutral-100">
                      Name
                    </label>

                    <input
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="bg-neutral-900 block rounded-md border-0 px-3.5 py-2 text-neutral-100 shadow-sm ring-1 ring-inset ring-neutral-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <button
                    onClick={handleCreateplay}
                    className="  mr-5 flex h-10 gap-x-1 items-center self-end font-medium bg-gradient-to-bl hover:bg-green-500 from-emerald-700 to-green-500 pr-5 pl-4 py-2 rounded-md transition-all active:scale-[0.98]"
                  >
                    <span>
                      <IoIosAdd size={30} />
                    </span>
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Sidebar;
