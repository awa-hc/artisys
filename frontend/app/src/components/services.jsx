import React from 'react';
import ServiceCard from './Servicecard';

function services() {
  return (
    <div className=' w-full h-screen text-white font-custom px-60 '>
        <div>
            <div className=" tracking-wide title text-[52px] font-extrabold font-custom">
                <p>Servicios</p>
            </div>
            <div className="cards">
                <div className="flex">
                    <ServiceCard
                        title="Gestion de proyectos"
                        description="La creación de una base de datos para la gestión de proyectos y tareas, especialmente con Artisys, representa un gran cambio en la forma en que las organizaciones gestionan sus proyectos y tareas."
                        imageUrl="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        cardSize="small"
                    />
                    <ServiceCard
                        title="Comunicación entre desarrolladore"
                        description="La implementación de una plataforma de comunicación interactiva (plataforma externa) representa un gran cambio en la forma en que las organizaciones se comunican con sus clientes y empleados de una manera efectiva."
                        imageUrl="https://images.pexels.com/photos/7643750/pexels-photo-7643750.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        cardSize="large"
                    />
                {/* Puedes agregar más tarjetas de servicio aquí */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default services