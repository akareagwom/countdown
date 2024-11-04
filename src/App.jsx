import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#1e1f29] h-auto' >
      <div className="text-white h-[60.3vh] py-20 text-center bg-[url(images/bg-stars.svg)] h-full">
        <h1 className='uppercase  text-2xl text-bold'>We're launching soon</h1>
        <div className="">
        </div>
      </div>
          <img className='h-[40vh] w-[200%]' src="images/pattern-hills.svg" alt="" srcset="" />
    </div>
  )
}

export default App
