import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='bg-[#ffffff] w-100 h-100'>
      <h1 className="text-3xl font-bold underline text-teal-500">
        Hello world!
      </h1>
    </div>
  )
}

export default App
