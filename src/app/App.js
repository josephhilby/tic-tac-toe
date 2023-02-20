import './App.css';
import Game from '../components/Game';
import { Player } from '../components/Player';

const player_x = new Player('X')
const player_o = new Player('O')

export default function GameRound() {
  return (
    <>
      <Game player_x={player_x} player_o={player_o} />
    </>
  )
}
