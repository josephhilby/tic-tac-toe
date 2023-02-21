import { useState } from 'react';
import { calculateWinner } from '../components/CalculateWinner';
import Square from '../components/Square';
import Board from '../components/Board';
import { Player } from '../components/Player';

export default function Game({ player_x, player_o }) {
  const initialState = [Array(9).fill(null)];
  const [history, setHistory] = useState(initialState);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 == 0;

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
      setCurrentMove(nextMove);
  }

  const winner = calculateWinner(currentSquares);
  let status;
  if (winner === player_x.name) {
    player_x.wins += 1;
    status = 'Winner: ' + winner;
  } else if (winner === player_o.name) {
    player_o.wins += 1;
    status = 'Winner: ' + winner;
  } else if (!currentSquares.includes(null)) {
    status = 'Draw'
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const moves = history.map((currentSquares, move) => {
    var description = 'Go to move #' + move;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  const reset = <button onClick={() => jumpTo(0)}> Play Again? </button>

  const display = (winner ? reset : moves)

  return (
    <div className='app'>
      <div className='player'>
        <p>X's Win Counter:</p>
        <p>{player_x.wins}</p>
      </div>
      <div className='game'>
        <div className='status'>{status}</div>
        <div className='game-board'>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className='game-info'>
          <ol>{display}</ol>
        </div>
      </div>
      <div className='player'>
        <p>O's Win Counter:</p>
        <p>{player_o.wins}</p>
      </div>
    </div>
  );
}
