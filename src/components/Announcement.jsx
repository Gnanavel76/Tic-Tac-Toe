import React from 'react'

const Announcement = (props) => {
    const { winner, draw, restart, goHome } = props
    return (
        <div className="modal fade show d-block">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body text-center py-5">
                        {draw &&
                            <>
                                <i className="fa-solid fa-handshake-angle text-primary fa-4x mb-3"></i>
                                <p className="text-center h5 mb-4">Draw</p>
                            </>

                        }
                        {!draw &&
                            <>
                                <i className={`fa-solid ${winner.name !== "Computer" ? "fa-trophy" : "fa-face-frown-open"} text-primary fa-4x mb-3`}></i>
                                {winner.name === "Computer"
                                    ?
                                    <p className="text-center h5 mb-4">You Lost</p>
                                    :
                                    <div>
                                        <p className="text-center h5 mb-1">{winner.name}</p>
                                        <p className="text-center h6 mb-4">Winner</p>
                                    </div>
                                }
                            </>
                        }
                        <div className="d-flex align-items-center justify-content-center">
                            <button onClick={restart} className="btn bg-primary text-white me-3 px-4">Play Again</button>
                            <button onClick={goHome} className="btn bg-primary text-white px-4">Go Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Announcement
