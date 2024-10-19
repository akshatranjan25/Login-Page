import { useState } from 'react'
import './App.css'
import LoginPg from './pages/LoginPg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LoginPg/>  
    </>
  )
}

export default App
