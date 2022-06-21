import React, { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ keyValue, bigKey }) => {
  const { board, setBoard, currentAttempt, setCurrentAttempt, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);

  const selectLetter = () => {
    if (keyValue === "ENTER") {
      console.log(keyValue)
      onEnter();
    } else if (keyValue === "DELETE") {
      onDelete();
    } else {
     onSelectLetter(keyValue);
    }
  };
  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
      {" "}
      {keyValue}{" "}
    </div>
  );
};

export default Key;