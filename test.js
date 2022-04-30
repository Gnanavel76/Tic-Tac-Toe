const mark = (index) => {
    const div = e.target
    const row = div.dataset.row
    const col = div.dataset.column
    const newData = [...data]
    if (!gameOver && newData[row][col] === "") {
        if (turn === 0) {
            newData[row][col] = player1.choice
            setData(newData)
            const isWin = checkWin(div)
            if (isWin) {
                setPlayer1({ ...player1, score: player1.score + 1 })
                setGameOver(true)
            }
            else if (isDraw()) {
                setGameOver(true)
                setDraw(true)
            } else if (player2.name === "Computer") {
                setTurn(1)
                computerMove()
            } else {
                setTurn(1)
            }
        } else if (player2.name === "Computer") {
            const cell = computerMove()
            const row = cell.dataset.row
            const col = cell.dataset.column
            newData[row][col] = player2.choice
            setData(newData)
            const isWin = checkWin(div)
            if (isWin) {
                setPlayer2({ ...player2, score: player2.score + 1 })
                setGameOver(true)
            } else if (isDraw()) {
                setGameOver(true)
                setDraw(true)
            }
            else setTurn(0)
        }
        else {
            newData[row][col] = player2.choice
            setData(newData)
            const isWin = checkWin(div)
            if (isWin) {
                setPlayer2({ ...player2, score: player2.score + 1 })
                setGameOver(true)
            } else if (isDraw()) {
                setGameOver(true)
                setDraw(true)
            }
            else setTurn(0)
        }
    }
}