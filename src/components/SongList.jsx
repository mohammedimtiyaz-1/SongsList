import React from "react";
import Song from "./Song";

function SongList(props) {
  return (
    <div className="indiSong">
      {props.list && props.list.length !== 0 ? (
        props.list.map((ele) => (
          <Song
            id={ele.id}
            key={ele.title + ele.thumbnailUrl}
            title={ele.title}
            thumbnailUrl={ele.thumbnailUrl}
            url={ele.url}
            albumId={ele.albumId}
            deleteSong={props.deleteSong}
          />
        ))
      ) : (
        <p>No Results for this search</p>
      )}
    </div>
  );
}

export default SongList;
