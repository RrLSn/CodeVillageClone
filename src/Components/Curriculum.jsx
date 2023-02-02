import React from 'react'

const Curriculum = ({img, title, subTitle, desc, desc2}) => {
  return (
    <div className='flex gap-[1rem] mb-[3rem]'>
    <div className=''><img src={img} className='' alt="" /></div>
    <div>
    <h1 className='text-[1.5rem] text-primary mb-[0.5rem]'>{title}</h1>
    <h1 className='text-[1.2rem] mb-[0.5rem] font-[600] w-[16rem]'>{subTitle}</h1>
    <p className='text-[1rem] text-[#c2c2c2] w-[15rem]'>{desc}</p>
    <p className='text-[1rem] w-[15rem]'>{desc2}</p>
    </div>
  </div>
  )
}

export default Curriculum