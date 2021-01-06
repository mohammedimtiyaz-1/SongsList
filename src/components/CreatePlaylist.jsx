import React, { useState } from "react";

function CreatePlaylist(props) {
  const [i, seti] = useState("");

  const createPlay = () => {
    props.create(i);
    seti("");
  };
  return (
    <div className="createPlaylist">
      <span
        className="createButton"
        style={{
          margin: "5px",
          padding: "5px",
          fontSize: "25px",
          color: "#fff",
        }}
      >
        Create Playlists
      </span>
      <input
        style={{ fontSize: "18px", width: "300px" }}
        type="text"
        onChange={(e) => seti(e.target.value)}
        value={i}
        placeholder="Name of PlayList.."
      ></input>
      <button
        style={{ fontSize: "18px", width: "120px", padding: "8px" }}
        onClick={() => {
          createPlay();
        }}
      >
        create
      </button>
    </div>
  );
}

export default CreatePlaylist;
