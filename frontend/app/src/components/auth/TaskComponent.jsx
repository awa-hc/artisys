import { TeamAuth } from "./TeamAuth";

export default function({level, estado, title, description}){
    let backgroundColorClass;
    let backgrounColorText;
    let bgColor;
    let textColor;

    switch (level.toLowerCase()) {
        case 'bajo':
            backgroundColorClass = 'bg-orange-300';
            backgrounColorText = 'text-orange-700';
        break;
        case 'medio':
            backgroundColorClass = 'bg-blue-300'; // Reemplaza 'celeste' con la clase de color que desees
            backgrounColorText = 'text-blue-700';
        break;
        case 'alto':
            backgroundColorClass = 'bg-red-300'; // Reemplaza 'rojo' con la clase de color que desees
            backgrounColorText = 'text-red-700';
        break;
        default:
            backgroundColorClass = 'bg-gray-300'; // Color predeterminado si el nivel no coincide con ninguno de los casos anteriores
            backgrounColorText = 'text-gray-700';
    }

    switch(estado.toLowerCase()){
        case 'hacer':
            bgColor = 'bg-blue-400';
            textColor = 'text-blue-800';
        break;
        case 'en progreso':
            bgColor = 'bg-orange-400';
            textColor = 'text-orange-800';
        break;
        case 'terminado':
            bgColor = 'bg-green-400';
            textColor = 'text-green-800';
        break;
        default:
            bgColor = 'bg-gray-300';
            textColor = 'text-gray-700';
    }
    return(
        <div className=" w-full h-fit bg-fondo_tagert rounded-xl">
            <div className="text-white p-5 flex gap-4 flex-col">
                <section className="flex flex-row justify-between">
                    <h2 className={` text-sm ${backgroundColorClass} ${backgrounColorText} py-1 px-3 rounded-lg w-fit `}>{level}</h2>
                    <h3 className={` text-sm ${bgColor} ${textColor} py-1 px-3 rounded-lg w-fit `}>{estado}</h3>
                </section>
                <h1 className=" text-xl font-bold">{title}</h1>
                <p className=" text-[#787486]">{description}</p>
            </div>
        </div>
    );
}