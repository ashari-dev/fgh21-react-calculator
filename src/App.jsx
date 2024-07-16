import React from 'react'

function App() {

  return (
    <div className='flex flex-col gap-6 bg-black p-3 max-w-[350px] m-10 rounded-3xl' >
      <div className='text-white font-semibold text-8xl text-right'>0</div>
      <div className='grid grid-cols-4 gap-3'>
        <button className='h-[75px] w-[75px] bg-[#a4a4a4] rounded-full font-bold'>AC</button>
        <button className='h-[75px] w-[75px] bg-[#a4a4a4] rounded-full font-bold'>+/-</button>
        <button className='h-[75px] w-[75px] bg-[#a4a4a4] rounded-full font-bold'>%</button>
        <button className='h-[75px] w-[75px] bg-[#f7a300] text-white rounded-full font-bold'>/</button>
        <button className='h-[75px] w-[75px] bg-[#303030] text-white rounded-full font-bold'>7</button>
        <button className='h-[75px] w-[75px] bg-[#303030] text-white rounded-full font-bold'>8</button>
        <button className='h-[75px] w-[75px] bg-[#303030] text-white rounded-full font-bold'>9</button>
        <button className='h-[75px] w-[75px] bg-[#f7a300] text-white rounded-full font-bold'>x</button>
        <button className='h-[75px] w-[75px] bg-[#303030] text-white rounded-full font-bold'>4</button>
        <button className='h-[75px] w-[75px] bg-[#303030] text-white rounded-full font-bold'>5</button>
        <button className='h-[75px] w-[75px] bg-[#303030] text-white rounded-full font-bold'>6</button>
        <button className='h-[75px] w-[75px] bg-[#f7a300] text-white rounded-full font-bold'>-</button>
        <button className='h-[75px] w-[75px] bg-[#303030] text-white rounded-full font-bold'>1</button>
        <button className='h-[75px] w-[75px] bg-[#303030] text-white rounded-full font-bold'>2</button>
        <button className='h-[75px] w-[75px] bg-[#303030] text-white rounded-full font-bold'>3</button>
        <button className='h-[75px] w-[75px] bg-[#f7a300] text-white rounded-full font-bold'>+</button>
        <button className='flex items-center pl-8 h-[75px] bg-[#303030] text-white rounded-full font-bold col-span-2'>0</button>
        <button className='h-[75px] w-[75px] bg-[#303030] text-white rounded-full font-bold'>.</button>
        <button className='h-[75px] w-[75px] bg-[#f7a300] text-white rounded-full font-bold'>=</button>
      </div>
    </div>
  )
}

export default App
