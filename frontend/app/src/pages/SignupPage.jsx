import { Link } from "react-router-dom";
import ButtonAuth from "../components/auth/ButtonAuth";
import InputField from "../components/auth/InputField";

export function SignupPage() {
  return (
    <div
      className="App bg-fondo bg-cover h-screen w-screen flex text-white justify-center items-center font-custom tracking-wider"
      style={{ backgroundImage: "URL(./fondo.png)" }}
    >
      <section className="w-2/3 h-max py-8 flex justify-center items-center bg-black/40 rounded-3xl shadow-lg backdrop-blur-lg">
        <main className="w-4/12 text-center">
          <h3 className="text-2xl font-bold mb-2">Registro</h3>
          <p className="font-light">Llena los siguientes datos</p>
          <section className="py-5">
            <section className="flex flex-row gap-2">
                <InputField sizew="w-1/2"
                text="Nombre"
                placeholder="Nombre"
                type="Name"
                />
                <InputField sizew="w-1/2"
                text="Apellido"
                placeholder="Apellido"
                type="Name"
                />
            </section>
                <InputField
                text="Email"
                placeholder="ejempl@email.com"
                type="Email"
                />
                <InputField
                text="Contraseña"
                placeholder="Introduzca su contraseña"
                type="Password"
                />
                <InputField
                text="Repita su Contraseña"
                placeholder="Repita su contraseña"
                type="Password"
                />
          </section>

          <ButtonAuth
            title="Crear Cuenta"
            textcolor="text-white"
            bgcolor="bg-ff5f56"
          />
          <Link to="/login" className="flex justify-end mt-4">
            Ya tienes cuenta?{" "}
            <span className="ml-2 font-bold">Inicia Sesión</span>
          </Link>
        </main>
        <section className="absolute bottom-4 right-8">
            <Link to="/"> Retroceder </Link>
        </section>
      </section>
    </div>
  );
}
