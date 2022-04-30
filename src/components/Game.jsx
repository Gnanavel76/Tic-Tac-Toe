import React, { useState, useEffect } from 'react'
import Board from './Board';
import Announcement from './Announcement';
import { runFireworks, randomInRange } from "../utils"
const Game = (props) => {
    const { player1, player2, setPlayer1, setPlayer2, setGameStarted } = props
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(true)
    const [winner, setWinner] = useState("")
    const [draw, setDraw] = useState(false)

    const computerMove = () => {
        const emptyCell = []
        for (let i = 0; i < squares.length; i++) {
            if (!squares[i]) {
                emptyCell.push(i)
            }
        }
        return emptyCell[randomInRange(0, emptyCell.length - 1)]
    }
    const mark = (index) => {
        const moves = [...squares]
        if (!moves[index]) {
            moves[index] = turn ? player1.choice : player2.choice
            setSquares(moves)
            setTurn(!turn)
        }
    }
    const calculateWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        let winner = lines.reduce((acc, [a, b, c]) => {
            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
                acc = squares[a] === player1.choice ? player1 : player2
            }
            return acc
        }, "")
        if (!winner && squares.every(s => s)) {
            setDraw(true)
        } else if (winner) {
            setWinner(winner)
        } else if (player2.name === "Computer" && !turn) {
            const emptyCellIndex = computerMove()
            mark(emptyCellIndex)
        }
    }
    const goHome = () => {
        setPlayer1({ name: "", choice: "X", score: 0 })
        setPlayer2({ name: "Computer", choice: "0", score: 0 })
        setDraw(false)
        setTurn(true)
        setWinner({})
        setSquares(Array(9).fill(null))
        setGameStarted(false)
    }
    const restart = () => {
        setSquares(Array(9).fill(null))
        setWinner("")
        setDraw(false)
        setTurn(true)
    }
    useEffect(() => {
        if (winner) {
            if (winner.choice === player1.choice) {
                setPlayer1({ ...player1, score: player1.score + 1 })
            } else {
                setPlayer2({ ...player2, score: player2.score + 1 })
            }
            if (winner.name !== "Computer") {
                runFireworks()
            }
        }
    }, [winner])
    useEffect(() => {
        calculateWinner()
    }, [turn])
    return (
        <section id="game" className='bg-primary min-vh-100 py-5'>
            <div className="container">
                <div className="player-details d-flex justify-content-between mb-4">
                    <div className='d-flex align-items-center'>
                        <div className="board-cell border-bottom-0 border-end-0 me-3">
                            {player1.choice === "X" ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-0"></i>}
                        </div>
                        <div className='mt-1'>
                            <p className='text-white h5 mb-1'>{player1.name}</p>
                            <p className='text-white mb-0'>Score - {player1.score}</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center flex-row-reverse'>
                        <div className="board-cell border-bottom-0 border-end-0 ms-3">
                            {player2.choice === "X" ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-0"></i>}
                        </div>
                        <div className='mt-1'>
                            <p className='text-white h5 mb-1'>{player2.name}</p>
                            <p className='text-white mb-0'>Score - {player2.score}</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-center h-100'>
                    <p className='h5 text-white text-center mb-4'>{turn ? player1.name : player2.name}'s Turn</p>
                    <Board squares={squares} mark={mark} />
                </div>
            </div>
            {(winner || draw) && <Announcement draw={draw} winner={winner} goHome={goHome} restart={restart} />}
        </section>
    )
}

export default Game