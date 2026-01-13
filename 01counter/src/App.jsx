import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15) //[var, fn responsible to update var/refernce holder]

  //let counter = 15 //no need as usestate already got 15 as initial value
  const addValue = () => {
    console.log("clicked", counter);
    
    //counter = counter + 1
    if(counter<20){
    setCounter(counter+1)}
  }
  const subValue = () => {
    if(counter>0){
    setCounter(counter -1)}
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>add value {counter}</button>

      <br />
      <button onClick={subValue}>remove value {counter}</button>
    </>
  )
}

export default App
