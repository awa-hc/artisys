import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Info from "./components/info";
import Services2 from "./components/services2";

import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <div className="App bg-fondo bg-cover h-full w-screen" style={{backgroundImage: "URL(./fondo.png)"}}>
        <Navbar/>
        <main className=" snap-y snap-mandatory relative w-full h-screen overflow-auto">
          <div className=" snap-start pt-20">
            <Hero/>
          </div>
          <div className=" snap-start pt-20">
            <Info/>
          </div>
          <div className=" snap-start pt-20">
            <Services2/>
          </div>
        </main>
      </div>
    </NextUIProvider>
  );
}

export default App;
