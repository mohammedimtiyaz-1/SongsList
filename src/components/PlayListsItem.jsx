import React from "react";

function PlayListsItem(props) {
  return (
    <div
      id={props.name}
      style={{
        display: "flex",
        justifyContent: "space-around",
        color: "rgb(231, 207, 207)",
        fontSize: "22px",

        margin: "10px 0 5px 0",
      }}
    >
      <p>Name:{props.name}</p>
      <p>
        Created at: <em>{props.created}</em>
      </p>
      <button
        style={{ width: "140px", fontSize: "18px" }}
        onClick={() => props.onPlaylistSelect(props.name)}
      >
        Select
      </button>
    </div>
  );
}

export default PlayListsItem;
