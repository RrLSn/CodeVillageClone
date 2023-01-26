import React from 'react'

const Features = ({img, title, desc}) => {
  return (
    <div>
          <div className='trainingIcon'>
            <img src={img} alt="" />
            <h1 className='training w-[23rem]'>{title}</h1>
            </div>
            <p className='pl-[4.8rem] text-[1.5rem] w-[30rem]'>{desc}</p>
    </div>
  )
}

export default Features