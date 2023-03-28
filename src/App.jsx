import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {

  return (
    <div className='flex flex-col items-center w-full h-screen'>
      <h1 className='text-black text-center font-bold p-3 text-[23px] bg-white w-10/12 rounded-md mt-10 mb-4
       uppercase'>Random Gifs</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-10'>
        <Random />
        <Tag />
      </div>

    </div>
  )
}

export default App
