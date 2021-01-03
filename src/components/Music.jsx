import React, { useState, useEffect } from "react";
import Songs from "./Songs";
import Playlists from "./Playlists";

function Music() {
  const [song, setSong] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then(
        (result) => {
          result.length = 100;
          console.log(result);
          window.localStorage.setItem("songs", JSON.stringify(result));
          !window.localStorage.getItem("playLists", JSON.stringify([])) &&
            window.localStorage.getItem("playLists", JSON.stringify([]));
        },

        (error) => {
          console.log(error);
        }
      );

    return () => {
      console.log("cleaned");
      //window.localStorage.removeItem("songs");
    };
  }, []);
  const onClickHandler = (t) => setSong(t);

  return (
    <div>
      <div className="button-container">
        <button onClick={() => onClickHandler(true)}>All Songs</button>
        <button onClick={() => onClickHandler(false)}>Playlists</button>
      </div>
      {song ? (
        <Songs list={JSON.parse(localStorage.getItem("songs"))} />
      ) : (
        <Playlists />
      )}
    </div>
  );
}

export default Music;
