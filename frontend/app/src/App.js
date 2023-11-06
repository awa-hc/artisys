import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import { NextUIProvider } from "@nextui-org/react";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    name: "home",
  },
  {
    path: "/login",
    element: <LoginPage />,
    name: "login",
  },
  {
    path: "/signup",
    element: <SignupPage/>,
    name: "signup"
  },
];
function App() {
  return (
    <NextUIProvider>
      <Router>
        <Routes>
          {routes.map((routes) => {
            return (
              <Route
                key={routes.name}
                path={routes.path}
                element={routes.element}
              />
            );
          })}
        </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
