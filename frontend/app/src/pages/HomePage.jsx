import Hero from "../components/hero";
import Info from "../components/info";
import Services2 from "../components/services2";
import Navbar from "../components/navbar";

export default function HomePage() {
  return (
    <div
      className="App bg-fondo bg-cover h-screen w-screen "
      style={{ backgroundImage: "URL(./fondo.png)" }}
    >
      <Navbar />

      <main className=" snap-y snap-mandatory w-full h-screen overflow-auto">
        <div className=" snap-start ">
          <Hero />
        </div>
        <div className=" snap-start ">
          <Info />
        </div>
        <div className=" snap-start">
          <Services2 />
        </div>
      </main>
    </div>
  );
}
