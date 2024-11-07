import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#1e1f29] h-auto' >
      <div className="
      text-white 
      h-[60.3vh] 
      py-20 
      text-center 
      bg-no-repeat
      bg-[url(images/bg-stars.svg)] h-full">
        <h1 className='uppercase  text-2xl text-bold'>We're launching soon</h1>
        <div className="">
        </div>
      </div>
      <div className="flex justify-between pb-40 px-10 pt-10">
        <h1 className='text-5xl text-pink-400'>09</h1>
        <h1 className='text-5xl text-pink-400'>09</h1>
        <h1 className='text-5xl text-pink-400'>09</h1>
      </div>
      {/* tuesday */}
      <div className="relative">
          <img className='h-[40vh] w-[200%]' src="images/pattern-hills.svg" alt="" srcset="" />
          <div className="flex justify-between left-[10%] items-center px-24 top-60 w-[300px] absolute">
          <img className='' src="images/icon-facebook.svg" alt="" srcset="" />
          <img className='' src="images/icon-pinterest.svg" alt="" srcset="" />
          <img className='' src="images/icon-instagram.svg" alt="" srcset="" />
          </div>

      </div>
    </div>
  )
}

export default App
