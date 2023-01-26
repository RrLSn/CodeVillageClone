import React from 'react'

const Curriculum = ({img, title, subTitle, desc, desc2}) => {
  return (
    <div className='flex gap-[1rem] mb-[5rem]'>
    <div className='w-[6rem]'><img src={img} className='' alt="" /></div>
    <div>
    <h1 className='text-4xl text-primary mb-[1rem]'>{title}</h1>
    <h1 className='text-2xl mb-[1rem] font-[600] w-[16rem]'>{subTitle}</h1>
    <p className='text-2xl text-[#c2c2c2] w-[15rem]'>{desc}</p>
    <p className='text-2xl w-[15rem]'>{desc2}</p>
    </div>
  </div>
  )
}

export default Curriculum