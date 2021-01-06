import React, { useState, useEffect } from "react";
import PlayListsItem from "./PlayListsItem";
import PlayListSongs from "./PlayListSongs";

function PlayListsList(props) {
  const [selected, setSelected] = useState(null);
  const [selectedplayList, setSelectedplayList] = useState({});

  const onPlaylistSelect = (ele) => {
    console.log("Selected", ele);
    setSelected(ele);
  };

  const display = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "20px 20px",

          margin: "1% 21% 2% 21%",
        }}
      >
        {props.list &&
          props.list.map((play) => (
            <PlayListsItem
              id={play.name}
              key={play.name + play.create}
              name={play.name}
              created={play.create}
              onPlaylistSelect={onPlaylistSelect}
            />
          ))}
      </div>
    );
  };

  useEffect(() => {
    if (selected !== null) props.displayCreate(false);
    const l = props.list && props.list.filter((e) => e.name === selected);

    setSelectedplayList(l);
  }, [selected]);

  return (
    <div>
      {!selected ? (
        display()
      ) : (
        <div>
          <PlayListSongs name={selected} list={selectedplayList} />
        </div>
      )}
    </div>
  );
}

export default PlayListsList;
