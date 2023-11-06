import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import hero_panel from "./hero - panel.png";
import hero_projects from "./hero - projects.png";

function services2() {
  return (
    <div className=" w-full h-screen text-white font-custom px-60 ">
      <div className=" tracking-wide title text-[52px] font-extrabold font-custom">
        <p>Servicios</p>
      </div>
      <div className="max-w-[1200px] gap-4 grid grid-cols-12 grid-rows-2 pt-2">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute h-44 z-10 flex-col !items-start bg-gradient-to-b from-zinc-950/95 to-zinc-0 tracking-wider">
            <p className="text-tiny text-white/80 uppercase font-bold">
              Gestión de proyectos
            </p>
            <h4 className="text-white font-medium font-custom text-large">
              Transforma la gestión de proyectos.
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px] tracking-wider ">
          <CardHeader className="absolute z-10 h-44 flex-col !items-start bg-gradient-to-b from-zinc-950/95 to-zinc-0">
            <p className="text-tiny text-white/80 uppercase font-bold">
              Comunicación
            </p>
            <h4 className="text-white font-medium text-large">
              Cambia comunicación con clientes y empleados.
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://images.pexels.com/photos/7643750/pexels-photo-7643750.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px] tracking-wider ">
          <CardHeader className="absolute z-10 h-44 flex-col !items-start bg-gradient-to-b from-zinc-950/95 to-zinc-0">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Supercharged
            </p>
            <h4 className="text-white font-medium text-large">
              Creates beauty like a beast
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-5"
        >
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src={hero_projects}
          />
          <CardFooter className="absolute bg-fondo/90 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between font-custom tracking-wide">
            <div>
              <p className="text-white text-tiny">Asignación de tareas</p>
              <p className="text-white/60 text-tiny">El desarrollo de un sistema formal de asignación de tareas es una oportunidad para mejorar la gestión de los recursos humanos y crear un entorno de trabajo más justo y equitativo.</p>
            </div>
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Ingresa
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src={hero_panel}
          />
          <CardFooter className="absolute bg-fondo/90 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col font-custom tracking-wide">
                <p className=" text-tiny text-white">Panel Dashboard</p>
                <p className=" text-tiny text-white/60">
                El diseño de un Dashboard para el seguimiento de proyectos pendientes es una oportunidad para mejorar la gestión de proyectos y tomar decisiones más informadas.
                </p>
              </div>
            </div>
            <Button radius="full" size="sm" className=" bg-ff5f56 text-white">
              Ingresar
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default services2;
