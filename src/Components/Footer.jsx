import React from 'react'

const Footer = () => {
  return (
    <footer className='w-[98%] m-[auto] h-[20vh] flex justify-between items-center'>
          <h1 className='text-2xl'>Copyright © 2020-2023 Codevillage Limited</h1>
          <div className='flex justify-end gap-[2rem] w-[20rem] h-[4rem]'>
        <img className='w-[2rem]' src="/media/fb-icon.svg" alt="" />
        <img className='w-[2rem]' src="/media/tw-icon.svg" alt="" />
        <img className='w-[2rem]' src="/media/github-icon.svg" alt="" />
        <img className='w-[2rem]' src="/media/location.svg" alt="" />
      </div>
        </footer>
  )
}

export default Footer