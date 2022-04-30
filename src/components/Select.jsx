import React from 'react'
const Select = ({ label, id, name, value, options, handleChange }) => {
    return (
        <div className="mb-5">
            <label htmlFor={id} className="form-label">{label}</label>
            <select onChange={handleChange} value={value} name={name} id={id} className="form-select">
                {options.map(({ label, value }, index) => <option key={index} value={value}>{label}</option>)}
            </select>
        </div>
    )
}

export default Select