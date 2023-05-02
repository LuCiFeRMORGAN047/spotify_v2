import React, { createContext, useState } from "react";

export const MusicContext = createContext();

export const MusicProvider = (props) => {
  const [songDetails, setSongDetails] = useState({
    id : "",
    title: "",
    artist: "",
    cover: "",
    audioSrc: "",
    duration: 0
  });

  const playSong = (song) => {
    setSongDetails({
      id: song.id,
      title: song.title,
      artist: song.artist,
      cover: song.cover,
      audioSrc: song.audioSrc,
      duration : song.duration
    });
  };

  return (
    <MusicContext.Provider value={{ songDetails, playSong }}>
      {props.children}
    </MusicContext.Provider>
  );
};