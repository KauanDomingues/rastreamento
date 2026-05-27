import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listarEncomendas, adicionarEncomenda, deletarEncomenda } from "../services/api.jsx";
import { EncomendaList } from "../components/EncomendaList";

export default function Home() {
  const [encomendas, setEncomendas] = useState([]);
  const [codigo, setCodigo] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    const data = await listarEncomendas(token);
    if (Array.isArray(data)) {
      setEncomendas(data);
    } else {
      navigate("/login");
    }
  }

  async function handleAdicionar() {
    if (!codigo) return;
    await adicionarEncomenda(codigo, token);
    setCodigo("");
    carregar();
  }

  async function handleDeletar(id) {
    await deletarEncomenda(id, token);
    carregar();
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "100px",
        padding: "0.4rem 0.4rem 0.4rem 1.25rem",
        maxWidth: "480px",
        border: "1.5px solid #e5e7eb"
      }}>
        <input
          type="text"
          placeholder="Código de rastreio"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            fontSize: "15px",
            backgroundColor: "transparent",
          }}
        />
        <button
          onClick={handleAdicionar}
          style={{
            backgroundColor: "#ED361E",
            border: "none",
            borderRadius: "100px",
            width: "38px",
            height: "38px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexShrink: 0
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>
      <h2>Rastreamentos</h2>
      <EncomendaList encomendas={encomendas} onDeletar={handleDeletar} />
    </div>
  );
}