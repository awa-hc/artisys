import { Link } from "react-router-dom";
import ButtonAuth from "../components/auth/ButtonAuth";
import InputField from "../components/auth/InputField";

export function SignupPage() {
  return (
    <div
      className="App bg-fondo bg-cover h-screen w-screen flex text-white justify-center items-center"
      style={{ backgroundImage: "URL(./fondo.png)" }}
    >
      <section className="w-2/3 h-max min-h-2/3 flex justify-center items-center bg-black/40 rounded-3xl shadow-lg border-t-[0.5px] border-l-[0.5px] border-white backdrop-blur-lg">
        <main className="w-4/12 text-center">
          <h3 className="text-2xl">Registro</h3>
          <p className="font-light">Llena los siguientes datos</p>
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
            <InputField
              text="Contraseña"
              placeholder="Introduce tu contraseña"
              type="Password"
            />
          </section>

          <ButtonAuth
            title="nashe"
            textcolor="text-white"
            bgstart="from-[#FF5F56]"
            bgend="to-black"
          />
          <Link to="/login" className="flex justify-end mt-4">
            Ya tienes cuenta?{" "}
            <span className="ml-2 font-bold">Inicia Sesión</span>
          </Link>
        </main>
      </section>
    </div>
  );
}
