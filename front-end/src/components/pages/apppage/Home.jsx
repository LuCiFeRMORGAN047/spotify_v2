import React, { useState, useEffect } from "react";
import Tracks from "./Tracks";
import axios from "axios";

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getdata");
        setTracks(response.data.tracks.data);
        setAlbums(response.data.albums.data)
        setPlaylists(response.data.playlists.data)
        setPodcasts(response.data.podcasts.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchTracks();
  }, []);

  return (
    <div className="flex flex-col gap-y-6">
      
      <Tracks title="Trending Tracks" tracks={tracks} />
      <Tracks title="Trending Albums" tracks={albums} />
      <Tracks title="Trending Playlists" tracks={playlists} />
      <Tracks title="Trending Podcasts" tracks={podcasts} />
    </div>
  );
};

export default Home;









const PLAYLISTS1 = [
  { name: "Beast Mode", image: "/playlists/beast mode.jpg" },
  { name: "ESL CS:GO Playlist", image: "/playlists/ESL.jpg" },
  { name: "This Is Pop Smoke", image: "/playlists/pop smoke.jpg" },
  { name: "Rap Caviar", image: "/playlists/rap caviar.jpg" },
  { name: "Lyfë", image: "/playlists/out the way.jpg" },
];
const PLAYLISTS2 = [
  {
    name: "tourner dans le vide",
    image: "/playlists/tourner dans le vide.jpg",
  },
  { name: "as it was", image: "/playlists/as it was.jpg" },
  { name: "Eyes Closed", image: "/playlists/eyes.png" },
  { name: "bad habits", image: "/playlists/bad habits.jpg" },
  { name: "go", image: "/playlists/go.jpg" },
  { name: "heat waves", image: "/playlists/heat waves.jpg" },
  {
    name: "running up that hill",
    image: "/playlists/running up that hill.jpg",
  },
];
const PLAYLISTS3 = [
  { name: "Yeat Mix", image: "/playlists/yeat mix.jpg" },
  { name: "2010's Mix", image: "/playlists/2010 mix.jpg" },
  { name: "Hip Hop Mix", image: "/playlists/hip hop mix.jpg" },
  { name: "House Mix", image: "/playlists/house mix.jpg" },
  { name: "KANKAN Mix", image: "/playlists/kankan mix.jpg" },
];
