'use client'

import { useState, createContext } from 'react'

export const AppContext = createContext()

const Wrapper = ({ children }) => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <AppContext.Provider value={{ menuOpen, setMenuOpen }}>
      <div>
        {children}
      </div>
    </AppContext.Provider>
  )
}

export default Wrapper