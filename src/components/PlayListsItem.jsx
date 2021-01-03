import React from "react";

function PlayListsItem(props) {
  return (
    <div
      id={props.name}
      style={{
        display: "flex",
        justifyContent: "space-around",
        border: "1px solid black",
      }}
    >
      <p>name:{props.name}</p>
      <p>created at:{props.created}</p>
      <button onClick={() => props.onPlaylistSelect(props.name)}>Select</button>
    </div>
  );
}

export default PlayListsItem;
