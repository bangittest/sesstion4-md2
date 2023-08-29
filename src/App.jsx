import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState_Comp from './components/useState/UseState_Comp'
import UseContext from './components/useContext/UseContext'
import UseEffect from './components/useEffect/UseEffect'
import UseReducer from './components/useReducer/UseReducer'
import AddTodo from './components/Todos/AddTodo'
import Count_Text from './components/Count_Text/Count_Text'
import CountTime from './components/CountTime/CountTime'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseState_Comp/> */}
      {/* <UseContext/> */}
      {/* <UseEffect/> */}
      {/* <UseReducer/> */}
      <AddTodo/>
      {/* <Count_Text/> */}
      {/* <CountTime/> */}
    </>
  )
}

export default App
