import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const navigate = useNavigate();

    function capitalizarNome(valor) {
        return valor
            .split(" ")
            .map(p => p.charAt(0).toUpperCase() + p.slice(1))
            .join(" ");
    }

    function validarEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    async function handleCadastro() {
        if (!nome || !email || !senha) {
            setErro("Preencha todos os campos");
            return;
        }
        if (!validarEmail(email)) {
            setErro("Email inválido");
            return;
        }
        if (senha.length < 6) {
            setErro("A senha deve ter no mínimo 6 caracteres");
            return;
        }

        const response = await fetch("http://localhost:3000/usuarios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, email, senha })
        });

        const data = await response.json();

        if (response.ok) {
            navigate("/login");
        } else {
            setErro(data.mensagem || "Erro ao cadastrar");
        }
    }

    const inputStyle = {
        width: "100%",
        padding: "0.65rem 0.75rem",
        borderRadius: "8px",
        border: "1.5px solid #d1d5db",
        fontSize: "15px",
        boxSizing: "border-box",
        outline: "none",
    };

    const labelStyle = {
        fontSize: "14px",
        fontWeight: "500",
        color: "#374151",
        marginBottom: "4px",
        display: "block"
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            backgroundColor: "#f3f4f6",
            textAlign: "left"
        }}>
            <div style={{
                backgroundColor: "white",
                borderRadius: "16px",
                border: "1px solid #ED361E",
                padding: "2rem",
                width: "100%",
                maxWidth: "400px",
                boxSizing: "border-box"
            }}>
                <h1 style={{
                    textAlign: "center",
                    color: "#ED361E",
                    marginBottom: "1.75rem",
                    fontSize: "2rem"
                }}>Rastra - Cadastro</h1>

                <div style={{ marginBottom: "1rem" }}>
                    <label style={labelStyle}>Nome</label>
                    <input
                        type="text"
                        placeholder="Seu nome completo"
                        value={nome}
                        style={inputStyle}
                        onChange={(e) => setNome(capitalizarNome(e.target.value))}
                    />
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label style={labelStyle}>Email</label>
                    <input
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        style={inputStyle}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                    <label style={labelStyle}>Senha</label>
                    <input
                        type="password"
                        placeholder="Mínimo 6 caracteres"
                        value={senha}
                        style={inputStyle}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                {erro && (
                    <p style={{
                        color: "#DC2626",
                        fontSize: "13px",
                        marginBottom: "1rem",
                        marginTop: "-0.5rem"
                    }}>{erro}</p>
                )}

                <button
                    onClick={handleCadastro}
                    style={{
                        width: "100%",
                        padding: "0.75rem",
                        backgroundColor: "#ED361E",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "15px",
                        fontWeight: "500",
                        cursor: "pointer"
                    }}
                >
                    Continuar
                </button>

                <p style={{
                    textAlign: "center",
                    marginTop: "1.25rem",
                    fontSize: "14px",
                    color: "#6b7280"
                }}>
                    Já tem conta?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        style={{ color: "#ED361E", cursor: "pointer", fontWeight: "500" }}
                    >
                        Entrar
                    </span>
                </p>
            </div>
        </div>
    );
}