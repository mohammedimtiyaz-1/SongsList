import React from "react";
import Songs from "./Songs";

function PlayListSongs(props) {
  console.log(props.list[0]);
  return (
    <div>
      <p>Playlist : {props.name}</p>
      {props.list && <Songs list={props.list[0] && props.list[0].songs} />}
    </div>
  );
}

export default PlayListSongs;
