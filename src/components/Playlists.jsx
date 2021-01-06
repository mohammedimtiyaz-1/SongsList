import React, { useState, useEffect } from "react";
import PlayListsList from "./PlayListsList";
import CreatePlaylist from "./CreatePlaylist";

function Playlists() {
  const [list, setList] = useState([]);
  const [displayCreate, setDisplayCreate] = useState(true);

  const createPlaylist = (name) => {
    list.push({ name: name, songs: [], create: new Date() });
    window.localStorage.setItem("playLists", JSON.stringify(list));
    setList(list);
    setList(JSON.parse(localStorage.getItem("playLists")));
  };
  useEffect(() => {
    console.log("rendering play lists");
    if (!JSON.parse(localStorage.getItem("playLists"))) {
      localStorage.setItem("playLists", JSON.stringify([]));
    }
    setList(JSON.parse(localStorage.getItem("playLists")));
  }, []);
  useEffect(() => {}, [list]);

  const toggleDisplayCreate = (t) => {
    setDisplayCreate(t);
  };

  useEffect(() => {
    console.log("rendering play lists");
  });
  return (
    <div>
      <PlayListsList list={list} displayCreate={toggleDisplayCreate} />
      {displayCreate && <CreatePlaylist create={createPlaylist} />}
    </div>
  );
}

export default Playlists;
