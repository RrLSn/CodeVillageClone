import React from 'react'

const Curriculum = ({img, title, subTitle, desc, desc2}) => {
  return (
    <div className='flex gap-[1rem] mb-[3rem]'>
    <div className=''><img src={img} className='' alt="" /></div>
    <div>
    <h1 className='lg:text-[1.5rem] text-[2rem] text-primary mb-[0.5rem]'>{title}</h1>
    <h1 className='lg:text-[1.2rem] text-[2rem] mb-[0.5rem] font-[600] lg:w-[16rem]'>{subTitle}</h1>
    <p className='lg:text-[1rem] text-[1.7rem] text-[#c2c2c2] lg:w-[15rem] w-[18rem]'>{desc}</p>
    <p className='lg:text-[1rem] text-[1.7rem] lg:w-[15rem] w-[18rem]'>{desc2}</p>
    </div>
  </div>
  )
}

export default Curriculum