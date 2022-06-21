import React, { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ keyValue, bigKey }) => {
  const { board, setBoard, currentAttempt, setCurrentAttempt } =
    useContext(AppContext);

  const selectLetter = () => {
    if ((keyValue === "ENTER")) {
        if (currentAttempt.currentPos !== 5) return;

        setCurrentAttempt({attempt: currentAttempt.attempt + 1, letterPos: 0})
    } else {
      if (currentAttempt.letterPos > 4) return;
      const newBoard = [...board];
      newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyValue;
      setBoard(newBoard);
      setCurrentAttempt({
        ...currentAttempt,
        letterPos: currentAttempt.letterPos + 1,
      });
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
