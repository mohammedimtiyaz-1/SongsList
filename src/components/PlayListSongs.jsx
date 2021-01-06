import React, { useState, useEffect } from "react";
import ListCheck from "./SongsSelect";
import SongsPlaylist from "./SongsPlaylist";

function PlayListSongs(props) {
  const [addButton, setAddButton] = useState(false);
  const [list, setList] = useState([]);
  const toggleAdd = () => {
    setAddButton(!addButton);
  };

  const updateInLocalStorage = (list, name) => {
    let plist = JSON.parse(localStorage.getItem("playLists"));
    let plistModified = plist.filter((element) => element.name !== name);
    plistModified.push(list[0]);
    localStorage.setItem("playLists", JSON.stringify(plistModified));
  };
  const listSong = JSON.parse(localStorage.getItem("songs"));
  const deleteSong = (name) => {
    console.log("deleting...", name);
    console.log(list);
    let listMOd = list.map((ele) => {
      ele.songs = [...ele.songs.filter((e) => e !== name)];
      return ele;
    });
    console.log(listMOd);
    updateInLocalStorage(listMOd, props.name);
    setList(listMOd);
  };

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const schuffle = () => {
    console.log(list);
    console.log("schulling");
    let dummyArray = [...list[0].songs];
    let shf = shuffle(dummyArray);
    list[0].songs = shf;
    console.log(list);

    setList([...list]);
  };
  useEffect(() => {
    let plist = JSON.parse(localStorage.getItem("playLists"));
    let plistModified = plist.filter((element) => element.name === props.name);

    setList(plistModified);
  }, [addButton]);
  return (
    <div>
      <div className="addcontainer">
        <p style={{ color: "white", fontSize: "18px" }}>
          Playlist : {props.name}
        </p>
        {addButton && (
          <ListCheck list={listSong} playName={props.name} toggle={toggleAdd} />
        )}

        {!addButton && (
          <button
            onClick={() => {
              setAddButton(!addButton);
            }}
          >
            Add songs to Playlist
          </button>
        )}
      </div>

      {!list.songs ? (
        list.map((e) => (
          <SongsPlaylist
            list={e}
            deleteSongFromPlayList={deleteSong}
            schuffle={schuffle}
          />
        ))
      ) : (
        <p style={{ color: "white", fontSize: "18px", marginTop: "10px" }}>
          No songs to playlist
        </p>
      )}
    </div>
  );
}

export default PlayListSongs;
