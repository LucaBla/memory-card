import React, {useState} from "react";

function ScoreBoard(props) {
  //const [score, setScore] = useState(props.score);
  return (
    <div className="score-board">
      <div className="score">
        <p>Score:</p>
        <p>{props.score}</p>
      </div>
      <div className="highscore">
        <p>Highscore:</p>
        <p>{props.highscore}</p>
      </div>
    </div>
  );
}

export default ScoreBoard;