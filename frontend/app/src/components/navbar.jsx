import React, { memo } from 'react';
import imagen from "./../../src/components/logo.png";

const navbar = memo(() => {
  return (
    <div className="tracking-widest text-xs font-semibold fixed font-custom">
        <div className="w-screen h-20 flex flex-row px-20 py-4 justify-between">
          <div className='Logo flex items-center justify-star flex-grow basis-0'>
            <img src={imagen} alt="" className="w-10 items-center justify-center"/>
          </div>
          <div className='navbar flex flex-row gap-14 items-center text-white'>
            <p>INICIO</p>
            <p>ACERCA DE</p>
            <p>SERVICIOS</p>
          </div>
          <div className='user flex gap-8 items-center justify-end text-white flex-grow basis-0'>
            <button>REGISTRATE</button>
            <button className='login bg-ff5f56 px-4 py-1 rounded-3xl'>INICIAR SESIÓN</button>
          </div>
        </div>
    </div>
  )
})

export default navbar