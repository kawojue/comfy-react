import { createContext, useState, useEffect } from 'react'


const Context = createContext({})

export const DataProvider = ({ children }) => {
    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}

export default Context