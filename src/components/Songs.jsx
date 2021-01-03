import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SongList from "./SongList";

function Songs(props) {
  const [songList, SetSongList] = useState([]);

  useEffect(() => {
    SetSongList(props.list);
  }, [songList]);

  return (
    <div>
      <SearchBar />
      <SongList list={songList} />
    </div>
  );
}

export default Songs;
