import { useRef } from 'react'
import Square from './Square'

const Board = ({ squares, mark }) => {
    return (
        <div className="board-container mx-auto shadow d-flex flex-wrap">
            {squares.map((square, index) => <Square mark={mark} value={square} index={index} key={index} />)}
        </div>
    )
}

export default Board