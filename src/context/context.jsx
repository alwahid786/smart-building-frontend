import { createContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState([])
  const [finalData, setFinalData] = useState([])
  return (
    <AppContext.Provider
      value={{ userData, setUserData, finalData, setFinalData }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
