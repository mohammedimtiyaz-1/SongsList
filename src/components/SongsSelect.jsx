import React, { useState } from "react";
import Select from "react-select";

// function Value(props) {
//   return (
//     // <div style={{ background: "green" }}>
//     //   <p>Value</p>
//     // </div>
//     <Songs list={props.list[0] && props.list[0].songs} />
//   );
// }

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? "#fff"
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? "#f0f" > 2
          ? "white"
          : "black"
        : "#00f",
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled && (isSelected ? "#f00" : "#f00"),
      },
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: "#fff",
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: "#f00",
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: "#f00",
    ":hover": {
      backgroundColor: "#ff0",
      color: "white",
    },
  }),
};

export default function MyComponent(props) {
  const [selectedList, setSelectedList] = useState([]);
  const options = props.list.map((ele) => {
    return {
      value: ele.title,
      label: ele.title,
    };
  });

  const addToPlaylist = () => {
    let selectedPalyList = selectedList.map((e) => e.value);
    let plist = JSON.parse(localStorage.getItem("playLists"));
    let plistModified = plist.map((element) => {
      if (element.name === props.playName) {
        const listed = new Set([...element.songs, ...selectedPalyList]);
        element.songs = [...listed];
      }
      return element;
    });
    localStorage.setItem("playLists", JSON.stringify(plistModified));
    props.toggle();
  };

  return (
    <div className="songtextcontainer" style={{ width: "100%" }}>
      <Select
        closeMenuOnSelect={false}
        isMulti
        options={options}
        styles={colourStyles}
        placeholder={"Search for  song"}
        onChange={(e) => {
          console.log("reat-select", e);

          setSelectedList(e);
        }}
      />
      <button onClick={() => addToPlaylist()}>Add song +</button>
    </div>
  );
}
