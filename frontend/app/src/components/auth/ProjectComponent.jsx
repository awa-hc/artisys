import { TeamAuth } from "./TeamAuth";

export default function ProjectCompenent({title, img, description}){
    const urls = [
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600',
      ];
    return(
        <div className="w-[30em] h-fit bg-fondo_tagert text-white flex flex-col gap-6 rounded-xl p-5">
                <h1 className="font-bold text-3xl">
                    {title}
                </h1>
                <img src={img} alt="imagen de proyecto" className="h-3/5  w-full rounded-xl"/>
                <p className="">
                    {description}
                </p>
                <section>
                    <TeamAuth
                        cantidadPersonas={5}
                        imagenesUrls={urls}
                    />
                </section>
        </div>
    );
}