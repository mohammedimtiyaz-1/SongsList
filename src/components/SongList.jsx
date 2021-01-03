import React from "react";
import Song from "./Song";

function SongList(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {props.list &&
        props.list.map((ele) => (
          <Song
            id={ele.id}
            key={ele.title + ele.thumbnailUrl}
            title={ele.title}
            thumbnailUrl={ele.thumbnailUrl}
            url={ele.url}
            albumId={ele.albumId}
          />
        ))}
    </div>
  );
}

export default SongList;
