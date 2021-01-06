import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SongList from "./SongList";

function Songs(props) {
  const [songList, SetSongList] = useState(props.list);
  const [searchList, setSeacrchList] = useState(songList);
  useEffect(() => {
    setSeacrchList(songList);
  }, [songList]);

  const deleteSong = (id) => {
    console.log("deleting", id);
    SetSongList([...songList.filter((e) => e.id !== id)]);
  };

  const search = (s) => {
    console.log("search", s);

    setSeacrchList([
      ...songList.filter((e) => e.title.toLowerCase().includes(s)),
    ]);
  };

  return (
    <div>
      <SearchBar search={search} />
      <SongList list={searchList} deleteSong={deleteSong} />
    </div>
  );
}

export default Songs;
