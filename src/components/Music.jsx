import React, { useState, useEffect } from "react";
import Songs from "./Songs";
import Playlists from "./Playlists";

function Music() {
  const [song, setSong] = useState(true);
  const [play, setPlay] = useState(false);
  const [songsList, setSongList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then(
        (result) => {
          result.length = 100;
          // console.log(result);
          setSongList(result);
          window.localStorage.setItem("songs", JSON.stringify(result));
          !window.localStorage.getItem("playLists", JSON.stringify([])) &&
            window.localStorage.getItem("playLists", JSON.stringify([]));
        },

        (error) => {
          console.log(error);
        }
      );

    return () => {
      // console.log("cleaned");
      //window.localStorage.removeItem("songs");
    };
  }, []);

  const onClickHandler = () => {
    setSong(true);
    setPlay(false);
  };
  const onClickHandlerPlayList = () => {
    setPlay(true);
    setSong(false);
  };

  return (
    <div>
      <div className="button-container">
        <button
          style={{ fontSize: "18px", width: "150px", padding: "8px" }}
          onClick={() => onClickHandler()}
        >
          All Songs
        </button>
        <button
          style={{ fontSize: "18px", width: "150px", padding: "8px" }}
          onClick={() => {
            console.log("clicked play");
            onClickHandlerPlayList(true);
          }}
        >
          Playlists
        </button>
      </div>
      {song && <Songs list={JSON.parse(localStorage.getItem("songs"))} />}
      {play && <Playlists />}
    </div>
  );
}

export default Music;
