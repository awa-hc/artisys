import ProjectCompenent from "../components/auth/ProjectComponent";
import TaskComponent from "../components/auth/TaskComponent";

export function Components(){
    return(
        <section className="h-full w-screen bg-fondo p-12 flex flex-col gap-5 font-custom">
            <ProjectCompenent
                title="Mobil App"
                img='https://uizard.io/static/translation-mobile-app-plp-beb488bcaed7d24d92183f15886e5735.png'
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos harum quaerat quia eum molestiae possimus sequi tempora ex aut excepturi tenetur fugit debitis repudiandae, veniam fugiat voluptatibus minima eveniet similique.
                "
            />
            <section className="flex gap-10">
                <div className="w-[25rem] bg-fondo_card flex flex-col items-center gap-8 p-8 rounded-xl">
                    <section className="w-full h-fit flex flex-col gap-5">
                        <div className=" flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <p className="h-3 w-3 bg-blue-400 rounded-[50%]"/>
                                <h1 className="text-lg font-bold text-white">Hacer</h1>
                            </div>
                            <button className="bg-blue-400 h-5 w-5 rounded-md text-center">+</button>
                        </div>
                        <p className="w-full h-0.5 bg-blue-400" />
                    </section>
                    <TaskComponent
                        estado="Hacer"
                        level="Bajo"
                        title="Brainstorming"
                        description="Brainstorming brings team members' diverse experience into play. "
                    />
                </div>
                <div className="w-[25rem] bg-fondo_card flex flex-col items-center gap-8 p-8 rounded-xl">
                    <section className="w-full h-fit flex flex-col gap-5">
                        <div className=" flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <p className="h-3 w-3 bg-orange-400 rounded-[50%]"/>
                                <h1 className="text-lg font-bold text-white">En Proceso</h1>
                            </div>
                            <button className="bg-orange-400 h-5 w-5 rounded-md text-center">+</button>
                        </div>
                        <p className="w-full h-0.5 bg-orange-400" />
                    </section>
                    <TaskComponent
                        estado="En progreso"
                        level="Alto"
                        title="Wireframes"
                        description="Low fidelity wireframes include the most basic content and visuals."
                    />
                </div>
                <div className="w-[25rem] bg-fondo_card flex flex-col items-center gap-8 p-8 rounded-xl">
                    <section className="w-full h-fit flex flex-col gap-5">
                        <div className=" flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <p className="h-3 w-3 bg-green-400 rounded-[50%]"/>
                                <h1 className="text-lg font-bold text-white">Terminado</h1>
                            </div>
                            <button className="bg-green-400 h-5 w-5 rounded-md text-center">+</button>
                        </div>
                        <p className="w-full h-0.5 bg-green-400" />
                    </section>
                    <TaskComponent
                        estado="Terminado"
                        level="Medio"
                        title="Design System"
                        description="It just needs to adapt the UI from what you did before "
                    />
                </div>
            </section>
        </section>
    );
}