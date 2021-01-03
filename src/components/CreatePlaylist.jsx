import React, { useState } from "react";

function CreatePlaylist(props) {
  const [i, seti] = useState("");

  return (
    <div>
      <button> Create Playlists</button>
      <input
        type="text"
        onChange={(e) => seti(e.target.value)}
        value={i}
        placeholder="playList"
      ></input>
      <button onClick={() => props.create(i)}>create</button>
    </div>
  );
}

export default CreatePlaylist;
