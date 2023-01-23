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
      <div className='w-[100%] h-[160vh] pl-[8rem]'>
        <div className='grid grid-cols-2 pt-[8rem] gap-[5rem]'>
          <h1 className='text-7xl w-[35rem] font-[600]'>State of The Art Ecosystem for Creatives</h1>
          <p className='text-[1.5rem] pt-[2rem] w-[36rem]'>Be a part of an all-inclusive technology hub where you learn, collaborate with tech creatives and join a team of support systems offering you the top tools and frameworks to build solutions and earn big.</p>
        </div>
        <img src="/media/cv-office.jpg" className='pt-[6rem]' alt="" />
        <div className='grid grid-cols-3 pt-[7rem] gap-[2rem]'>
          <div>
            <div className='trainingIcon'>
            <img src="/media/bookmark-circle.svg" alt="" />
            <h1 className='training w-[17rem]'>Web & Mobile Development</h1>
            </div>
            <p className='pl-[4.8rem] text-[1.5rem] w-[25rem]'>We design and develop tech solutions for SMEs and Government Agency.</p>
          </div>
          <div>
          <div className='trainingIcon'>
            <img src="/media/tent-circle.svg" alt="" />
            <h1 className='training w-[17rem]'>Bootcamps & Trainings</h1>
            </div>
            <p className='pl-[4.8rem] text-[1.5rem] w-[25rem]'>We’re building the next generation of tech talents.</p>
          </div>
          <div>
          <div>
          <div className='trainingIcon'>
            <img src="/media/workspace-circle.svg" alt="" />
            <h1 className='training w-[23rem]'>Workspaces & Tech Hub</h1>
            </div>
            <p className='pl-[4.8rem] text-[1.5rem] w-[30rem]'>Work and Connect with other Creatives. All in a fun and cozy environment.</p>
          </div>
          </div>
        </div>
      </div>
      <div className='w-[100%] h-[130vh] bg-[#eff2f6] grid grid-cols-2 p-[5rem]'>
        <div className='mt-[18rem]'>
          <h1 className='text-7xl font-[600] pb-[2rem] '>Learn Web & Mobile Development. Access the global job market.</h1>
          <p className='text-[1.5rem]'>The world is constantly in need of technical talent supply pool. Tech is needed accross every sector. Your course of study doesn’t matter. All you need is the skill and experience.</p>
          <input type="button" value='Learn more' className='w-[15rem] h-[5rem] mt-[3rem] bg-green-800 rounded-md text-white text-[1.5rem]' />
        </div>
        <div className='ml-[20rem] programme mt-[7rem]'>
          <div className='flex gap-[1rem]'>
            <img src="/media/mail-white.svg" alt="" />
            <div className='pt-[1.5rem] '>
            <h1 className='text-4xl text-green-800 mb-[1rem]'>Program Schedule</h1>
            <h1>6 months training + 6months paid internship</h1>
            <p>(there is a custom schedule for students)</p>
            </div>
          </div>
          {/* <div>
          <div></div>
            <h1>Our Curriculum</h1>
            <h1>It covers the fundamentals and advanced concepts of web & mobile development</h1>
          </div>
          <div>
          <div></div>
            <h1>Experiential Learning</h1>
            <h1>30+ Hands-on Projects & 5+ Real World (Production Grade) Projects</h1>
          </div> */}
        </div>
      </div>
    </body>
  )
}

export default App
