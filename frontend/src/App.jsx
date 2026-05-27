import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Perfil from "./pages/Perfil";

function RotaProtegida({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

function App() {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login onLogin={setEmail} />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/*" element={
          <RotaProtegida>
            <div style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh"
            }}>
              <Header emailUsuario={email} />
              <main style={{ padding: "2rem", flex: 1 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/perfil" element={<Perfil />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </RotaProtegida>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;