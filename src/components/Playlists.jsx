import React, { useState, useEffect } from "react";
import PlayListsList from "./PlayListsList";
import CreatePlaylist from "./CreatePlaylist";

function Playlists(props) {
  const [list, setList] = useState([]);

  const createPlaylist = (name) => {
    console.log(name);
    list.push({ name: name, songs: [], create: new Date() });
    window.localStorage.setItem("playLists", JSON.stringify(list));
    setList(list);
  };
  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("playLists")));
  }, []);
  return (
    <div>
      <PlayListsList list={list} />
      <CreatePlaylist create={createPlaylist} />
    </div>
  );
}

export default Playlists;
