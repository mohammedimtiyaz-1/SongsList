import React from "react";

function Songs(props) {
  return (
    <div>
      {props.list.songs.length > 0 && (
        <div className="ShuffleButton">
          <button
            style={{ width: "23%" }}
            onClick={() => {
              props.schuffle();
            }}
          >
            Schuffle
          </button>
        </div>
      )}
      <div className="playlistSongContainer">
        {props.list.songs.length > 0 ? (
          props.list.songs.map((e) => (
            <div className="songindi">
              <div
                style={{
                  margin: "20px 20px",
                  width: "500px",
                  textAlign: "left",
                  boxShadow: "0px 0px 5px 5px #9572cc",
                  borderRadius: "20px",
                  padding: "10px",
                }}
              >
                <ul className="songsText"></ul>
                <p style={{ fontSize: "18px", color: "white" }}>{e}</p>
              </div>

              <div>
                <button
                  style={{
                    width: "150px",
                    fontSize: "18px",
                    color: "white",
                  }}
                  onClick={() => props.deleteSongFromPlayList(e)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "white", fontSize: "22px", marginTop: "10px" }}>
            No songs found in this playlist
          </p>
        )}
      </div>
    </div>
  );
}

export default Songs;
