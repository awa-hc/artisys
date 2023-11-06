import React from 'react'
import img_info from "./info.svg";

function info() {
  return (
    <div className="w-full h-screen text-white font-custom flex flex-row px-60 py-36 gap-24">
        <article className=' flex flex-col gap-8'>
            <div className="title tracking-wide text-[52px] font-extrabold">
                <p>¿Qué es ARTISYS?</p>
            </div>
            <div className="description">
                <p>Artysis es tu socio en la gestión de proyectos. Nuestra plataforma simplifica la forma en que trabajas, permitiéndote concentrarte en lo que más importa: tus proyectos y tu creatividad. Hacemos que la gestión de tareas sea sencilla y eficiente.</p>
            </div>
        </article>
        <div>
            <img src={img_info} alt="" className=' w-[1080px]' />
        </div>
    </div>
  )
}

export default info