import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Perfil() {
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [erro, setErro] = useState("");
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    async function handleAtualizar() {
        if (!senha) {
            setErro("Preencha a nova senha");
            return;
        }
        if (senha.length < 6) {
            setErro("A senha deve ter no mínimo 6 caracteres");
            return;
        }
        if (senha !== confirmarSenha) {
            setErro("As senhas não coincidem");
            return;
        }

        const id = JSON.parse(atob(token.split(".")[1])).id;

        const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ email, senha })
        });

        if (response.ok) {
            navigate("/");
        } else {
            setErro("Erro ao atualizar senha");
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
            paddingTop: "3rem"
        }}>
            <div style={{
                backgroundColor: "white",
                borderRadius: "16px",
                border: "2px solid #ED361E",
                padding: "2rem",
                width: "100%",
                maxWidth: "400px",
                boxSizing: "border-box"
            }}>
                <h1 style={{
                    textAlign: "center",
                    color: "#ED361E",
                    marginBottom: "0.25rem",
                    fontSize: "1.5rem"
                }}>Alterar Senha</h1>

                <p style={{
                    textAlign: "center",
                    color: "#6b7280",
                    fontSize: "13px",
                    marginBottom: "1.75rem"
                }}>{email}</p>

                <div style={{ marginBottom: "1rem" }}>
                    <label style={labelStyle}>Nova senha</label>
                    <input
                        type="password"
                        placeholder="Mínimo 6 caracteres"
                        value={senha}
                        style={inputStyle}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                    <label style={labelStyle}>Confirmar nova senha</label>
                    <input
                        type="password"
                        placeholder="Repita a nova senha"
                        value={confirmarSenha}
                        style={inputStyle}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                    />
                </div>

                {erro && (
                    <p style={{ color: "#DC2626", fontSize: "13px", marginBottom: "1rem", marginTop: "-0.5rem" }}>
                        {erro}
                    </p>
                )}

                <button
                    onClick={handleAtualizar}
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
                    Salvar
                </button>

                <p style={{
                    textAlign: "center",
                    marginTop: "1.25rem",
                    fontSize: "14px",
                    color: "#6b7280",
                    cursor: "pointer"
                }}
                    onClick={() => navigate("/")}
                >
                    Voltar
                </p>
            </div>
        </div>
    );
}