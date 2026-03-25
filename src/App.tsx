import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/home";
import Login from "./pages/login";



function App() {
  // role
  

  return (
    <>
      <Header id={1} ism={"Ali"} yosh={20} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
