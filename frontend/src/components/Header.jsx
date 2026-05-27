import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./components.css";

export function Header({ emailUsuario }) {
    const [aberto, setAberto] = useState(false);
    const navigate = useNavigate();
    const ref = useRef(null);

    useEffect(() => {
        function handleClickFora(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setAberto(false);
            }
        }
        document.addEventListener("mousedown", handleClickFora);
        return () => document.removeEventListener("mousedown", handleClickFora);
    }, []);

    function handleLogout() {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/login");
    }

    return (
        <header style={{
            padding: "0.3rem 1.5rem",
            backgroundColor: "#ED361E",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <h1>Rastra</h1>

            <div style={{ position: "relative" }} ref={ref}>
                <button className="button-no-bg" onClick={() => setAberto(!aberto)}>
                    {emailUsuario}
                </button>

                {aberto && (
                    <div style={{
                        position: "absolute",
                        right: 0,
                        top: "100%",
                        backgroundColor: "white",
                        borderRadius: "8px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                        padding: "0.5rem",
                        minWidth: "140px",
                        zIndex: 100
                    }}>
                        <button onClick={() => { navigate("/perfil"); setAberto(false); }} style={{
                            background: "none",
                            border: "none",
                            color: "#374151",
                            cursor: "pointer",
                            width: "100%",
                            textAlign: "left",
                            padding: "0.3rem 0.5rem",
                            fontSize: "14px"
                        }}>
                            Alterar Senha
                        </button>
                        <button onClick={handleLogout} style={{
                            background: "none",
                            border: "none",
                            color: "#ED361E",
                            cursor: "pointer",
                            width: "100%",
                            textAlign: "left",
                            padding: "0.3rem 0.5rem",
                            fontSize: "14px"
                        }}>
                            Sair
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}