import React from 'react'

const Footer = () => {
  return (
    <footer className='w-[75vw] m-[auto] lg:h-[15vh] h-[max-content] lg:flex justify-between items-center'>
          <h1 className='lg:text-1xl text-[1.5rem]'>Copyright © 2020-2023 Codevillage Limited</h1>
        <div className='flex justify-end gap-[2rem] lg:w-[15rem] w-[20rem] h-[4rem]'>
        <img className='lg:w-[1.5rem] w-[3rem]' src="/media/fb-icon.svg" alt="" />
        <img className='lg:w-[1.5rem] w-[3rem]' src="/media/tw-icon.svg" alt="" />
        <img className='lg:w-[1.5rem] w-[3rem]' src="/media/github-icon.svg" alt="" />
        <img className='lg:w-[1.5rem] w-[3rem]' src="/media/location.svg" alt="" />
      </div>
        </footer>
  )
}

export default Footer