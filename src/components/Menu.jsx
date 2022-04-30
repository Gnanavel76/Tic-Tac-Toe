import React, { useState } from 'react'
import Input from './Input'
import Select from './Select'
const gameModes = [
    {
        label: "Play against computer",
        value: "single"
    },
    {
        label: "2 Player",
        value: "multi"
    }
]

const Menu = (props) => {
    const { setGameStarted, player1, setPlayer1, player2, setPlayer2 } = props
    const [gameMode, setGameMode] = useState("single")
    const [error, setError] = useState(false)
    const changeGameMode = (e) => {
        const value = e.target.value;
        if (value === "multi") {
            setPlayer2({ ...player2, name: "" })
        } else {
            setPlayer2({ ...player2, name: "Computer" })
        }
        setGameMode(value)
    }
    const changeMarker = (e) => {
        const element = e.target
        if (element.id === "player1.choice") {
            setPlayer1({ ...player1, choice: element.value })
            setPlayer2({ ...player2, choice: element.value === "X" ? "0" : "X" })
        } else {
            setPlayer2({ ...player1, choice: element.value })
            setPlayer1({ ...player2, choice: element.value === "X" ? "0" : "X" })
        }
    }
    const onSubmit = () => {
        if (!player1.name || !player2.name) {
            setError(true)
        } else {
            setError(false)
            setGameStarted(true)
        }
    }
    return (
        <section className="menu bg-primary min-vh-100 py-5 d-flex align-items-center">
            <div className="container">
                <h1 className="text-center text-white title"><span>T</span>ic <span>T</span>ac <span>T</span>oe</h1>
                {error && <div className="alert alert-danger text-center mb-4" role="alert">
                    Please fill all the details!
                </div>}
                <Select label="Number of Player" options={gameModes} id="game-mode" name="game-mode" value={gameMode} handleChange={changeGameMode} />
                {gameMode === "single" ?
                    <>
                        <Input type="text" id="player1.name" label="Player Name" name="player1.name" value={player1.name} handleChange={(e) => setPlayer1({ ...player1, name: e.target.value })} />
                        <Select label="You want" options={[{ label: "X", value: "X" }, { label: "0", value: "0" }]} id="player1.choice" name="player1.choice" value={player1.choice} handleChange={changeMarker} />
                    </>
                    :
                    <div className="row mx-auto" id="multi">
                        <div className="col ps-0">
                            <Input type="text" id="player1-name" label="Player 1 Name" name="player1-name" value={player1.name} handleChange={(e) => setPlayer1({ ...player1, name: e.target.value })} />
                            <Select label="You want" options={[{ label: "X", value: "X" }, { label: "0", value: "0" }]} id="player1.choice" name="player1.choice" value={player1.choice} handleChange={changeMarker} />
                        </div>
                        <div className="col pe-0">
                            <Input type="text" id="player2-name" label="Player 2 Name" name="player2-name" value={player2.name} handleChange={(e) => setPlayer2({ ...player2, name: e.target.value })} />
                            <Select label="You want" options={[{ label: "X", value: "X" }, { label: "0", value: "0" }]} id="player2.choice" name="player2.choice" value={player2.choice} handleChange={changeMarker} />
                        </div>
                    </div>
                }
                <button type="button" onClick={onSubmit} className="btn d-block mx-auto px-4">Start Game</button>

            </div>
        </section>
    )
}

export default Menu