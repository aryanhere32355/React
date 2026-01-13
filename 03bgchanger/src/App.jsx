import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed bottom-12 inset-x-0 flex justify-center px-2">
          <div className="flex gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("red")} //onclick needs function, not returned value
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button  onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
