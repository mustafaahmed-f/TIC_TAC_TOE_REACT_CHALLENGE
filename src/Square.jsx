import { useState } from "react";

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};

export default function Square({
  setSquaresValues,
  squareNum,
  currentPlayer,
  setCurrentPlayer,
  isWinner,
}) {
  const [value, setValue] = useState(null);
  function handleChangeValue() {
    if (value || isWinner !== null) return;
    const currentValue = currentPlayer ? "O" : "X";
    setValue(currentValue);
    setSquaresValues((prev) =>
      prev.map((el, i) => (i === squareNum - 1 ? currentValue : el))
    );
    setCurrentPlayer(!currentPlayer);
  }
  return (
    <div className="square" style={squareStyle} onClick={handleChangeValue}>
      {value}
    </div>
  );
}
