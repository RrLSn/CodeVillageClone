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
      <header className="cdIntro lg:w-[99vw] h-[160vh] w-full">
        <img src="/media/hero_bg.png" alt="" className='hidden lg:block w-[68vw] h-[160vh] absolute right-0' />
        <div className='lg:pt-[4rem] lg:pl-[8rem] px-[4rem] lg:pb-[8rem] lg:w-[30rem] lg:px-[8rem] pt-[10rem] pb-[17rem]'><img src="/media/cv-logo.svg" alt="" className='lg:w-[8rem] w-[20rem]'/></div>
        <h1 className='text-8xl font-[550] w-[38rem] lg:pl-[8rem] px-[4rem]'>We build world class Tech talents</h1>
        <p className='lg:pl-[8rem] px-[4rem] w-[45rem] font-[350] text-[1.5rem] pt-[1.5rem]'>Join our next cohort to accelerate your dream of being a World Class Software Developer. No coding experience required.</p>
      <input type="button" name="" id="" value='Enroll now' className='w-[13rem] h-[4rem] lg:ml-[8rem] mx-[4rem] mt-[3rem] bg-primary rounded-md text-white text-[1.5rem] cursor-pointer' />

      <div className='flex justify-center gap-[2rem] w-[18rem] mt-[4rem] lg:ml-[8rem] mx-[4rem]'>
        <img className='w-[2.5rem]' src="/media/fb-icon.svg" alt="" />
        <img className='w-[2.5rem]' src="/media/tw-icon.svg" alt="" />
        <img className='w-[2.5rem]' src="/media/github-icon.svg" alt="" />
        <img className='w-[2.5rem]' src="/media/location.svg" alt="" />
      </div>
      </header>
      <div className=' w-full lg:w-[99vw] h-[170vh] lg:pl-[8rem] px-[4rem] pr-[8rem]'>
        <div className='lg:grid grid-cols-2 pt-[8rem] gap-[5rem] block'>
          <h1 className='text-6xl w-[33rem] font-[500]'>State of The Art Ecosystem for Creatives</h1>
          <p className='pt-[2rem] w-[26rem]'>Be a part of an all-inclusive technology hub where you learn, collaborate with tech creatives and join a team of support systems offering you the top tools and frameworks to build solutions and earn big.</p>
        </div>
        <div className='pt-[6rem] lg:w-[80vw] w-[85vh]'><img src="/media/cv-office.jpg" alt="" /></div>

        <div className='lg:grid grid-cols-3 pt-[7rem] gap-[2rem] block'>
          <Features img="/media/bookmark-circle.svg" title="Web & Mobile Development" desc="We design and develop tech solutions for SMEs and Government Agency."/>
          <Features img="/media/tent-circle.svg" title="Bootcamps & Trainings" desc="We’re building the next generation of tech talents."/>
          <Features img="/media/workspace-circle.svg" title="Workspaces & Tech Hub" desc="Work and Connect with other Creatives. All in a fun and cozy environment."/>
        </div>
      </div>
      
      <div className='block w-[99vw] h-[130vh] bg-[#eff2f6] lg:grid grid-cols-2 p-[5rem]'>
        <div className='mt-[7rem] h-[70vh]'>
          <h1 className='text-5xl font-[600] mb-10 mt-[5rem]'>Learn Web & Mobile Development. Access the global job market.</h1>
          <p className='text-[1.1rem]'>The world is constantly in need of technical talent supply pool. Tech is needed accross every sector. Your course of study doesn’t matter. All you need is the skill and experience.</p>
          <input type="button" value='Learn more' className='w-[13rem] h-[4rem] mt-[3rem] bg-primary rounded-md text-white text-[1.5rem] cursor-pointer' />
        </div>
        
        <div className='ml-[10rem] programme mt-[7rem] pl-[3rem]'>
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

      <div className='w-[99vw] h-[190vh] pt-[6rem] bg-[#f4f8f6]'>
        <div className='text-center w-[55%] m-[auto]'>
        <h1 className='text-5xl font-[700] mb-[2rem]'>Our Expertise</h1>
        <p className='text-2xl'>We have built several solutions from ground up using the following frameworks. Our world class expertise is enviable.</p>
        </div>

        <Language/>
      </div>

      <div className='w-[99vw] h-[70vh] text-center pt-[5rem]'>
        <h1 className='text-5xl w-[30rem] m-[auto] font-[600] mb-[2rem]'>Codevillage Kids & Teens Code Classes</h1>
        <p className='text-1xl'>Will your kids be able to build a tech solution? Yes, It’s possible.</p>
        <p className='text-1xl w-[42rem] m-[auto]'>“We catch them young” by introducing these fresh minds into how computer works and how to make it do what they want.</p>
        <div className='w-[25rem] m-[auto] flex mt-[2rem] text-1xl gap-[1.5rem] justify-center font-[600]'>
          <h1>Secure a spot for your kid now</h1>
          <img src="/media/arrow-right.svg" alt="" />
        </div>
      </div>

      <div className='w-[99vw] h-[max-content] bg-[#f4f8f6] p-[8rem] pb-[0rem] pt-[7rem] flex flex-col gap-[3rem]'>
        <div className='grid grid-cols-4 gap-[3rem]'>
          <div>
            <img className='w-[12rem]' src="/media/cv-logo.svg" alt="" />
            <p className='text-[1.2rem] w-[10rem] mt-[1.5rem] font-[350]'>Building the tech talents for the future of work.</p>
          </div>
          <div>
            <h1 className='h1-info'>Our Programs</h1>
            <p className='text-[1.2rem] w-[12rem] mt-[1rem] font-[350]'>Fullstack Training</p>
            <p className='text-[1.2rem] w-[10rem] mt-[0.5rem] font-[350]'>Kids & Teens Code Classes</p>
          </div>
          <div>
            <h1 className='h1-info'>Links</h1>
            <p className='text-[1.2rem] w-[10rem] mt-[0.5rem] font-[350]'>Careers</p>
            <p className='text-[1.2rem] w-[10rem] mt-[0.5rem] font-[350]'>Refund Policy</p>
            <p className='text-[1.2rem] w-[10rem] mt-[0.5rem] font-[350]'>Privacy Policy</p>
          </div>
          <div>
            <h1 className='h1-info'>Contacts</h1>
            <p className='text-[1.2rem] w-[12rem] mt-[1rem] mb-[1rem] font-[350]'>Rasak Onilu Plaza (Middle Floor), Adjacent Niger Motel, Niger Road, Ilorin, Nigeria</p>
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