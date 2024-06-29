import React from 'react'
import { assets } from '../../assets/assets'
import SideBarItems from './unit/SideBarItems'

const SideBar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <SideBarItems Title={"Home"} image={assets.home_icon} />
        <SideBarItems Title={"Search"} image={assets.search_icon} />
      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5 cursor-pointer' src={assets.arrow_icon} alt="" />
            <img className='w-5 cursor-pointer' src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start pl-4'>
            <h1>Create Your First Playlist</h1>
            <p className='font-light'>it's easy we will help you</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar