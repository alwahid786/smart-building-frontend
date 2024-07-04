/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  // const [currentStep, setStep] = useState(1)
  const [userData, setUserData] = useState({
    unitOfArea: '',
  })
  const [finalData, setFinalData] = useState([])

  function submitData(e) {
    e.preventDefault()
    setFinalData((finalData) => [...finalData, userData])
    setUserData('')
  }
  console.log('All Data is', finalData)

  return (
    <AppContext.Provider
      value={{ userData, setUserData, finalData, setFinalData, submitData }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
