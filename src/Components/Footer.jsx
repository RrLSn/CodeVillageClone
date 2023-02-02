import React from 'react'

const Footer = () => {
  return (
    <footer className='w-[75vw] m-[auto] h-[15vh] lg:flex justify-between items-center block'>
          <h1 className='text-1xl'>Copyright © 2020-2023 Codevillage Limited</h1>
          <div className='flex justify-end gap-[2rem] w-[15rem] h-[4rem]'>
        <img className='w-[1.5rem]' src="/media/fb-icon.svg" alt="" />
        <img className='w-[1.5rem]' src="/media/tw-icon.svg" alt="" />
        <img className='w-[1.5rem]' src="/media/github-icon.svg" alt="" />
        <img className='w-[1.5rem]' src="/media/location.svg" alt="" />
      </div>
        </footer>
  )
}

export default Footer