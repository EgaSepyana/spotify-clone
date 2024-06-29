import { useState } from 'react'
import SideBar from './components/SideBar/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
          <SideBar />
      </div>
    </div>
    </>
  )
}

export default App
