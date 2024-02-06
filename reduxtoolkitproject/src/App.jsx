import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Redux Toolkit and Its Implementation</h1>
    <AddTodo/>
    <br/>
    <Todos/>
    </>
  )
}

export default App
