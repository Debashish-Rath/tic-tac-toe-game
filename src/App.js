import { useState } from "react";
import "./App.css";

function Square({value, onSquareClick}) {
  return <button onClick={onSquareClick}>{value}</button>;
}

export default function Board() {

  const [xIsNext,setXIsnext] = useState(true)
  const [squares,setSquares] = useState(Array(9).fill(null));

  function handleClick(i){

    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice()

    if (xIsNext) {
      nextSquares[i] = 'X'
    }
    else {
      nextSquares[i] = 'O'
    }

    setSquares(nextSquares)
    setXIsnext(!xIsNext)
  }

  let winner = calculateWinner(squares);
  let game_status;

  if (winner) {
    game_status = 'Winner is : ' + winner;
  }

  else if (!winner && !squares.includes(null))  {
      game_status = 'No Winner .. Game is Drawn '
  }

  else {
    game_status = 'Next Player is ' + (xIsNext ? 'X' : 'O'); 
  }

  function clearBoard() {
    let getSquareData = squares.slice();
    getSquareData.fill(null);
    winner = null;
    game_status = 'No Status'
    setSquares(getSquareData);
    setXIsnext(true);
  }

  return (
    <>
      <div className="game-header">
        <h1>Welcome to Tic-Tac-Toe Game </h1>
      </div>

<div className="board-container">
<div class="board-row">
        <div class="square-box">
          <div class="square">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
          </div>
          <div class="square">
            <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
          </div>
          <div class="square">
            <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
          </div>
        </div>
        <div class="square-box">
          <div class="square">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
          </div>
          <div class="square">
            <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
          </div>
          <div class="square">
            <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
          </div>
        </div>
        <div class="square-box">
          <div class="square">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
          </div>
          <div class="square">
            <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
          </div>
          <div class="square">
            <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
          </div>
        </div>
      </div>

      <div className="game-status">
        <h1>{game_status}</h1>
      </div>
      
      <div className="reset-board">
        <div className="reset-btn">
          <button onClick={clearBoard}>Reset</button>
        </div>
      </div>
</div>
      
    </>
  );
}

function calculateWinner(squares) {

  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for (let i=0 ; i < lines.length ; i++){
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
