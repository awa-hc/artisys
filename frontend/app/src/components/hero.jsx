import React from "react";
import { Link } from "react-router-dom";

function hero() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-screen text-white font-custom">
      <h1 className="ml-96 font-offbit font-semibold text-[100px]">
        ARTISYS
        <span className="ml-8 font-bold text-[90px]" style={{ opacity: 0.65 }}>
          System
        </span>
      </h1>
      <p className="subtitle flex flex-row justify-center text-[16px] font-thin pt-7 tracking-wider">
        Empieza a organizar, colaborar y crear
      </p>
      <nav className="buttons flex flex-row justify-center pt-12 gap-6 font-extrabold text-[14px] tracking-widest">
        <Link href="#" className=" bg-[#3F496F] px-8 py-1 rounded-2xl">
          <p>CONOCE MÁS</p>
        </Link>
        <Link href="#" className=" bg-[#FF5F56] px-8 py-1 rounded-2xl">
          <p>COMIENZA YA</p>
        </Link>
      </nav>
    </main>
  );
}

export default hero;
