'use client'

import { createContext, useContext, useState } from "react"

const AppContext = createContext({})

export const AppContextProvider = async ({ children }) => {
    
    const [menuOpen, setMenuOpen] = useState(false)
    const [weeks, setWeeks] = useState([])

    const state = {
        weeks, setWeeks,
        menuOpen, setMenuOpen,
    }

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)