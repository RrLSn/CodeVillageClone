import { useState } from 'react'
import './App.css'
import Curriculum from './Components/Curriculum'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Language from './Components/Language'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body className="App w-full">
      <header className="cdIntro lg:w-[99vw] h-[140vh] w-full">
        <img src="/media/hero_bg.png" alt="" className='hidden lg:block w-[73vw] h-[140vh] absolute right-0' />
        <div className='pt-[5rem] pl-[8rem] pb-[8rem] w-[30rem]'><img src="/media/cv-logo.svg" alt="" className=''/></div>
        <h1 className='text-8xl font-[650] w-[40rem] pl-[8rem]'>We build world class Tech talents</h1>
        <p className='pl-[8rem] w-[60rem] font-[350] text-[2rem] pt-[1.5rem]'>Join our next cohort to accelerate your dream of being a World Class Software Developer. No coding experience required.</p>
      <input type="button" name="" id="" value='Enroll now' className='w-[15rem] h-[5rem] ml-[8rem] mt-[3rem] bg-primary rounded-md text-white text-[1.5rem]' />

      <div className='flex justify-center gap-[2rem] w-[20rem] mt-[8rem] ml-[12rem]'>
        <img className='w-[4rem]' src="/media/fb-icon.svg" alt="" />
        <img className='w-[4rem]' src="/media/tw-icon.svg" alt="" />
        <img className='w-[4rem]' src="/media/github-icon.svg" alt="" />
        <img className='w-[4rem]' src="/media/location.svg" alt="" />
      </div>
      </header>
      <div className=' w-full lg:w-[99vw] h-[160vh] pl-[8rem] pr-[8rem]'>
        <div className='grid grid-cols-2 pt-[8rem] gap-[5rem]'>
          <h1 className='text-7xl w-[35rem] font-[600]'>State of The Art Ecosystem for Creatives</h1>
          <p className='text-[1.5rem] pt-[2rem] w-[36rem]'>Be a part of an all-inclusive technology hub where you learn, collaborate with tech creatives and join a team of support systems offering you the top tools and frameworks to build solutions and earn big.</p>
        </div>
        <img src="/media/cv-office.jpg" className='pt-[6rem]' alt="" />
        <div className='grid grid-cols-3 pt-[7rem] gap-[2rem]'>
          <Features img="/media/bookmark-circle.svg" title="Web & Mobile Development" desc="We design and develop tech solutions for SMEs and Government Agency."/>
          <Features img="/media/tent-circle.svg" title="Bootcamps & Trainings" desc="We’re building the next generation of tech talents."/>
          <Features img="/media/workspace-circle.svg" title="Workspaces & Tech Hub" desc="Work and Connect with other Creatives. All in a fun and cozy environment."/>
        </div>
      </div>
      
      <div className='block w-[99vw] h-[130vh] bg-[#eff2f6] lg:grid grid-cols-2 p-[5rem]'>
        <div className='mt-[18rem]'>
          <h1 className='text-7xl font-[600] pb-[2rem] '>Learn Web & Mobile Development. Access the global job market.</h1>
          <p className='text-[1.5rem]'>The world is constantly in need of technical talent supply pool. Tech is needed accross every sector. Your course of study doesn’t matter. All you need is the skill and experience.</p>
          <input type="button" value='Learn more' className='w-[15rem] h-[5rem] mt-[3rem] bg-primary rounded-md text-white text-[1.5rem]' />
        </div>
        
        <div className='ml-[15rem] programme mt-[7rem] pl-[3rem]'>
          <Curriculum img= "/media/mail-white.svg" 
          title="Program Schedule" 
          subTitle="6 months training + 6months paid internship"
           desc="(there is a custom schedule for students)"/>

          <Curriculum img= "/media/group-white.svg" 
          title="Our Curriculum" 
          desc2="It covers the fundamentals and advanced concepts of web & mobile development"/>
          
          <Curriculum img= "/media/group-white.svg" 
          title="Experiential Learning" 
          subTitle="30+ Hands-on Projects & 5+ Real World (Production Grade) Projects"/>
        </div>
      </div>

      <div className='w-[99vw] h-[200vh] pt-[10rem] bg-[#f4f8f6]'>
        <div className='text-center w-[55%] m-[auto]'>
        <h1 className='text-7xl font-[700] mb-[2rem]'>Our Expertise</h1>
        <p className='text-3xl'>We have built several solutions from ground up using the following frameworks. Our world class expertise is enviable.</p>
        </div>

        <Language/>
      </div>

      <div className='w-[99vw] h-[70vh] text-center pt-[8rem]'>
        <h1 className='text-7xl w-[40rem] m-[auto] font-[600] mb-[2rem]'>Codevillage Kids & Teens Code Classes</h1>
        <p className='text-2xl'>Will your kids be able to build a tech solution? Yes, It’s possible.</p>
        <p className='text-2xl w-[63rem] m-[auto]'>“We catch them young” by introducing these fresh minds into how computer works and how to make it do what they want.</p>
        <div className='w-[30rem] m-[auto] flex mt-[2rem] text-2xl gap-[1.5rem] pl-[2rem] font-[600]'>
          <h1>Secure a spot for your kid now</h1>
          <img src="/media/arrow-right.svg" alt="" />
        </div>
      </div>

      <div className='w-[100%] h-[max-content] bg-[#f4f8f6] p-[10rem] pb-[0rem] flex flex-col gap-[5rem]'>
        <div className='grid grid-cols-4 gap-[3rem]'>
          <div>
            <img className='w-[15rem]' src="/media/cv-logo.svg" alt="" />
            <p className='text-3xl w-[15rem] mt-[3rem] font-[350]'>Building the tech talents for the future of work.</p>
          </div>
          <div>
            <h1 className='h1-info'>Our Programs</h1>
            <p className='text-3xl w-[15rem] mt-[1rem] font-[350]'>Fullstack Training</p>
            <p className='text-3xl w-[15rem] mt-[1rem] font-[350]'>Kids & Teens Code Classes</p>
          </div>
          <div>
            <h1 className='h1-info'>Links</h1>
            <p className='text-3xl w-[15rem] mt-[1rem] font-[350]'>Careers</p>
            <p className='text-3xl w-[15rem] mt-[1rem] font-[350]'>Refund Policy</p>
            <p className='text-3xl w-[15rem] mt-[1rem] font-[350]'>Privacy Policy</p>
          </div>
          <div>
            <h1 className='h1-info'>Contacts</h1>
            <p className='text-3xl w-[15rem] mt-[1rem] mb-[2rem] font-[350]'>Rasak Onilu Plaza (Middle Floor), Adjacent Niger Motel, Niger Road, Ilorin, Nigeria</p>
            <h1 className='h1-info'>08168861541 (Nigeria)</h1>
            <h1 className='h1-info'>+1 (707) 681-1531 (International)</h1>
            <h1 className='h1-info'>+1 (707) 681-1531 (Whatsapp)</h1>
            <h1 className='h1-info'>hello@codevillage.ng</h1>
          </div>
        </div>
        <Footer/>
      </div>
    </body>
  )
}

export default App