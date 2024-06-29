import React from 'react'

const SideBarItems = ({image , Title}) => {
  return (
    <div className='flex items-center gap-3 pl-8 cursor-pointer'>
        <img className='w-6' src={image} alt="" />
        <p className='font-bold'>{Title}</p>
    </div>
  )
}

export default SideBarItems