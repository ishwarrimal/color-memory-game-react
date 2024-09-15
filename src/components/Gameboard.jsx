import React, { useState } from "react";
import "./styles.css";

const colorLists = [
  "red",
  "green",
  "blue",
  "black",
  "pink",
  "orange",
  "red",
  "green",
  "blue",
  "black",
  "pink",
  "orange",
];
function Gameboard({ totalCell }) {
  const [count, setCount] = useState(0);
  const [revealedColor, setRevealedColor] = useState(
    Array.from({ length: totalCell })
  );
  const [curRevealed, setCurRevealed] = useState(null);
  const [isOver, setIsOver] = useState(false);
  function revealColor(index) {
    setCount(count + 1);
    const color = colorLists[index];
    if (!curRevealed) {
      setCurRevealed([index, color]);
    }
    setRevealedColor((prevRevealed) => {
      const revealed = [...prevRevealed];
      revealed[index] = color;
      if (curRevealed?.[1] === color) {
        setCurRevealed(null);
        if (revealed.filter((cell) => !cell).length === 0) {
          setTimeout(() => {
            setIsOver(true);
          }, 200);
        }
      } else {
        if (curRevealed) {
          setTimeout(() => {
            revealed[index] = null;
            revealed[curRevealed[0]] = null;
            setCurRevealed(null);
          }, 400);
        }
      }
      return revealed;
    });
  }
  return (
    <div>
      {!isOver ? (
        <div className="game-board">
          {Array.from({ length: totalCell }).map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => revealColor(index)}
                className="game-cell"
                disabled={revealedColor[index]}
                style={{ backgroundColor: `${revealedColor[index] || ""}` }}
              />
            );
          })}
        </div>
      ) : (
        `Congratulation, you completed the game in ${count} steps`
      )}
    </div>
  );
}

export default Gameboard;
