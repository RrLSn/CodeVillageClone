import React from 'react'

const Features = ({img, title, desc}) => {
  return (
    <div>
          <div className='trainingIcon'>
            <img src={img} alt="" />
            <h1 className='training w-[rem] text-[1.7rem]'>{title}</h1>
            </div>
            <p className='pl-[4rem] text-[1rem] w-[19rem]'>{desc}</p>
    </div>
  )
}

export default Features