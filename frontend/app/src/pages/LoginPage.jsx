import { Link } from "react-router-dom";
import ButtonAuth from "../components/auth/ButtonAuth";
import InputField from "../components/auth/InputField";

export function LoginPage() {
  return (
    <div
      className="App bg-fondo bg-cover h-screen w-screen flex text-white justify-center items-center font-custom tracking-wider"
      style={{ backgroundImage: "URL(./fondo.png)" }}
    >
      <section className="w-2/3 h-2/3 flex justify-center items-center bg-black/40 rounded-3xl shadow-2xl backdrop-blur-lg">
        <main className="w-4/12 text-center">
          <h3 className="text-2xl font-bold mb-2">Inicio de Sesion</h3>
          <p className="font-light">
            Inicia Sesion Con Tu cuenta de
            <span className="font-bold"> Artisys</span>
          </p>
          <section className="py-5">
            <InputField
              text="Email"
              placeholder="Ejemplo@gmail.com"
              type="Email"
            />
            <InputField
              text="Contraseña"
              placeholder="Introduce tu contraseña"
              type="Password"
            />
          </section>

          <ButtonAuth
            title="Inciar Sesión"
            textcolor="text-white"
            bgcolor="bg-ff5f56"
          />
          <Link to="/signup" className="flex justify-end mt-4">
            No tienes cuenta? <span className="ml-2 font-bold">Registrate</span>
          </Link>
        </main>
      </section>
    </div>
  );
}
