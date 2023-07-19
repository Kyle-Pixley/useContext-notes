import { useState, useContext, createContext } from 'react'
import './App.css'
import Main from './components/Main'

export const Context = createContext()

function App() {

  const [ treasure, setTreasure ] = useState("")
  console.log(treasure)

  return (
    <>
    <Context.Provider value={ [ treasure, setTreasure ] }>
      <h1>useContext Lecture</h1>
      <Main treasure={treasure} />
    </Context.Provider>
    </>
  )
}

export default App
