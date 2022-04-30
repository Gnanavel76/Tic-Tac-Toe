import React from 'react'
const Input = ({ label, id, type, name, value, handleChange }) => {
    return (
        <div className="mb-5">
            <label htmlFor={id} className="form-label">{label}</label>
            <input type={type} className="form-control" id={id} name={name} value={value} onChange={handleChange} />
        </div>
    )
}

export default Input