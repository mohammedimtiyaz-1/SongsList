import React from "react";

function Song(props) {
  return (
    <div className="songindi">
      <img src={props.thumbnailUrl} alt={props.thumbnailUrl}></img>
      <div
        style={{
          margin: "20px 20px",
          maxWidth: "600px",
          textAlign: "left",
          boxShadow: "0px 0px 5px 5px #9572cc",
          borderRadius: "20px",
          padding: "10px",
        }}
      >
        <ul className="songsText">
          <li>
            <span>{props.id}</span> {props.title}{" "}
          </li>
        </ul>
      </div>

      <div>
        <button
          style={{ width: "140px", fontSize: "18px" }}
          onClick={() => {
            props.deleteSong(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Song;
