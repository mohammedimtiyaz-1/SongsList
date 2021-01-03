import React, { useState } from "react";

function SearchBar() {
  const [i, seti] = useState("");
  return (
    <div>
      <input
        type="search"
        placeholder="search song"
        value={i}
        onChange={(e) => {
          seti(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
