import React, { useState } from "react";
import Dice from "./Dice";
import "./RollDice.css";

function RollDice() {
  const [state, setState] = useState({
    dice1: "one",
    dice2: "three",
    rolling: false,
    totalScore: 4,
  });

const {dice1,dice2,rolling,totalScore} = state;

  return (
    <>
    <div className="roll-dice">
      <div className="rollDice-container">
      <Dice face="one" />
      <Dice face="three" />
      </div>
      <button onClick={roll} disabled={rolling}>
       {rolling ? "Rolling..." : "Roll Dice"}
      </button>
      <h2>Total Score : {totalScore}</h2>
    </div>
      <Dice face="one" />
    </>
  );
}

RollDice.defaultProps = {
 sides:[
  {one : 1},
  {two : 2},
  {three : 3},
  {four : 4},
  {five : 5},
  {six : 6},
 ]
}



export default RollDice;
