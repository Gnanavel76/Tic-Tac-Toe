import React from 'react'

const Square = ({ value, index, mark }) => {
    return (
        <div className="board-cell" onClick={() => mark(index)}>
            {value && <i className={`fa-solid ${value === "X" ? "fa-xmark" : "fa-0"}`}></i>}
        </div>
    )
}

export default Square