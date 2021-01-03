import React from "react";

function Song(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        border: "1px solid black",
        margin: "20px 20px",
        alignItems: "center",
      }}
    >
      <div
        style={{ margin: "20px 20px", maxWidth: "400px", textAlign: "left" }}
      >
        <ul>
          <li>Song Title:{props.title} </li>
          <li>ALbum:{props.albumId}</li>
        </ul>
      </div>

      <img src={props.thumbnailUrl} alt={props.thumbnailUrl}></img>

      <div>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Song;
