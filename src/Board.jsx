import { useEffect, useState } from "react";
import Square from "./Square";
import { checkWinner } from "./checkWinner";

//================================================================================
//=============================== Styles =========================================
//================================================================================

const rowStyle = {
  display: "flex",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

//================================================================================
//================================================================================
//================================================================================

//// Array for creating rows
const rowsCreator = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//// Board component
export default function Board() {
  const [currentPlayer, setCurrentPlayer] = useState(false);
  const [squaresValues, setSquaresValues] = useState(Array(9).fill(null));
  const [squareKeys, setSquareKeys] = useState(
    Array.from({ length: 9 }, (_, i) => i + 1)
  );

  //// identifying rows, columns and diagonals
  const row1 = squaresValues.slice(0, 3);
  const row2 = squaresValues.slice(3, 6);
  const row3 = squaresValues.slice(6, 9);
  const column1 = [row1[0], row2[0], row3[0]];
  const column2 = [row1[1], row2[1], row3[1]];
  const column3 = [row1[2], row2[2], row3[2]];
  const diagonal1 = [row1[0], row2[1], row3[2]];
  const diagonal2 = [row1[2], row2[1], row3[0]];

  //// check if there is a winner
  const winner = checkWinner({
    row1,
    row2,
    row3,
    column1,
    column2,
    column3,
    diagonal1,
    diagonal2,
  })
    ? !currentPlayer
    : null;

  //// Function for reset button
  function handleReset() {
    setSquaresValues(Array(9).fill(null));
    setCurrentPlayer(false);
    setSquareKeys((prev) => prev.map((el) => el + 9));
  }

  return (
    <div style={containerStyle} className="gameBoard">
      {winner === null && (
        <div id="statusArea" className="status" style={instructionsStyle}>
          Current player: <span>{currentPlayer ? "O" : "X"}</span>
        </div>
      )}
      {winner !== null && (
        <div id="winnerArea" className="winner" style={instructionsStyle}>
          Winner: <span>{winner ? "O" : "X"}</span>
        </div>
      )}
      <button style={buttonStyle} onClick={handleReset}>
        Reset
      </button>
      <div style={boardStyle}>
        {rowsCreator.map((row, i) => (
          <div className="board-row" style={rowStyle} key={i}>
            {row.map((squareNumber) => (
              <Square
                setSquaresValues={setSquaresValues}
                squareNum={squareNumber}
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer}
                isWinner={winner}
                key={squareKeys[squareNumber - 1]}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
