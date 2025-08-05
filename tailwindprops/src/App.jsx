import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
let myObj = {
  username : "deepanshu",
  age : 21
}

let myarr = [1,2,3,4,5,]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="mychannel" btntext = "click here to know more" />
      <Card username="other channel"  />
      <Card username="third channel" btntext='click me' />

    </>
  )
}

export default App
