import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(0)
  const addvalue = () => {
    if (counter>=20) {
      alert("cant increase value further")
      setCounter(nextCount => Math.min(nextCount + 1, 20));
    }
    else{
      setCounter(nextCount => Math.min(nextCount + 1));

    }

  }
  const decvalue = () => {
    if (counter<=0) {
      alert("cant decrease value further")
      setCounter(prevCount => Math.max(prevCount - 1, 0));
    }
    else{
      setCounter(prevCount => Math.max(prevCount - 1));

    }
  }
  return (
    <>
      <h1>Calc Counter</h1>
      <h2> counter value : {counter}</h2>

      <button onClick={addvalue}>Increase value</button>
      <br></br>
      <br></br>
      <button onClick={decvalue}>Decrease value</button>

    </>
  )
}

export default App
