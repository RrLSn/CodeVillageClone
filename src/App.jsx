import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body className="App">
      <div className="cdIntro w-[100%] h-[150vh]">
        <img src="/media/hero_bg.png" alt="" className='w-[70vw] h-[150vh] absolute right-0' />
        <img src="/media/cv-logo.svg" alt="" className='pt-[7rem] pl-[8rem] pb-[10rem]'/>
        <h1 className='text-8xl font-[650] w-[40rem] pl-[8rem]'>We build world class Tech talents</h1>
        <p className='pl-[8rem] w-[60rem] font-[350] text-[2rem] pt-[4.5rem]'>Join our next cohort to accelerate your dream of being a World Class Software Developer. No coding experience required.</p>
      <input type="button" name="" id="" value='Enroll now' className='w-[20rem] h-[5rem] ml-[8rem] mt-[3rem] bg-green-800 rounded-md text-white text-[1.5rem]' />
      </div>
      <div></div>
    </body>
  )
}

export default App
