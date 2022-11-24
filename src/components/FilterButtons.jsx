import React from 'react'

const FilterButtons = () => {
    const btns = ['all', 'ikea', 'marcos', 'caressa', 'liddy']
    return (
        <>
            {btns.map((btn, index) => (
                <button key={index}>
                    {btn}
                </button>
            ))}
        </>
    )
}

export default FilterButtons
