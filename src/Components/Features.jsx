import React from 'react'

const Features = ({img, title, desc}) => {
  return (
    <div>
          <div className='trainingIcon'>
            <img src={img} alt="" />
            <h1 className='training lg:text-[1.7rem] text-[2.5rem] w-[17rem]'>{title}</h1>
            </div>
            <p className='lg:pl-[4rem] pl-[6rem] lg:text-[1rem] text-[1.5rem] w-[19rem]'>{desc}</p>
    </div>
  )
}

export default Features