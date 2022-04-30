import React, { useState } from 'react'
import Menu from './components/Menu'
import Game from './components/Game'


const defaultState = {
  isGameStarted: false,
  gameMode: "single",
  player1: { name: "", choice: "X", score: 0 },
  player2: { name: "Computer", choice: "0", score: 0 },
  squares: Array(9).fill(null),
  turn: true, // true - player1, false - player2
  winner: "",
  draw: ""
}

const App = () => {
  const [player1, setPlayer1] = useState({ name: "", choice: "X", score: 0 })
  const [player2, setPlayer2] = useState({ name: "Computer", choice: "0", score: 0 })
  const [isGameStarted, setGameStarted] = useState(false)
  // useEffect(() => {
  //   let player2 = gameMode === "single" ? "Computer" : ""
  //   setPlayer2(player2)
  // }, [gameMode])
  if (isGameStarted) {
    return <Game
      setGameStarted={setGameStarted}
      player1={player1}
      setPlayer1={setPlayer1}
      player2={player2}
      setPlayer2={setPlayer2}
    />
  }
  return <Menu
    setGameStarted={setGameStarted}
    player1={player1}
    setPlayer1={setPlayer1}
    player2={player2}
    setPlayer2={setPlayer2}
  />
}

export default App
