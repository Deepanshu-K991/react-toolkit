import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp() {
  return (
  <div>
    <h1>Custom App</h1>
  </div>
  )

}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://youtube.com',
//         target: '_blank'
//     },
//     children: 'click me'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href : 'https://google.com' ,  target: '_blank'},
  'click me to visit google'
)
createRoot(document.getElementById('root')).render(
  
     <App /> 
    // <Myapp/>
    // anotherElement
    // reactElement
  
)
