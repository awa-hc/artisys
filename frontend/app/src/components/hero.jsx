import React from 'react'

function hero() {
  return (
    <div className='hero w-full h-screen text-white font-custom'>
      <div className="title flex flex-row items-center gap-6 justify-end pr-56 pt-32">
        <p className=' font-offbit font-semibold text-[100px]'>ARTISYS</p>
        <p className=' font-bold text-[90px]' style={{opacity: 0.65}}>System</p>
      </div>
      <div className="subtitle flex flex-row justify-center text-[16px] font-thin pt-7 tracking-wider">
        <p>Empieza a organizar, colaborar y crear</p>
      </div>
      <div className="buttons flex flex-row justify-center pt-12 gap-6 font-extrabold text-[14px] tracking-widest">
        <a href="#" className=' bg-[#3F496F] px-8 py-1 rounded-2xl'>
          <p>CONOCE MÁS</p>
        </a>
        <a href="#" className=' bg-[#FF5F56] px-8 py-1 rounded-2xl'>
          <p>COMIENZA YA</p>
        </a>
      </div>
    </div>
  )
}

export default hero