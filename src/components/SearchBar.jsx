import React, { useState } from "react";

function SearchBar(props) {
  const [i, seti] = useState("");
  return (
    <div>
      <input
        style={{ fontSize: "18px", width: "600px", padding: "10px" }}
        type="search"
        placeholder="search song"
        value={i}
        // onKeyPress={(event) => {
        //   if (event.key === "Enter") {
        //     props.search(i);
        //   }
        // }}
        onChange={(e) => {
          seti(e.target.value);
          props.search(i);
        }}
      />
    </div>
  );
}

export default SearchBar;
