function corDoStatus(status) {
    switch (status) {
        case "Postado": return "#6B7280";
        case "Em trânsito": return "#2563EB";
        case "Em transferência": return "#7C3AED";
        case "Saiu para entrega": return "#D97706";
        case "Entregue": return "#16A34A";
        case "Atrasado": return "#DC2626";
        case "Tentativa de entrega": return "#EA580C";
        case "Aguardando retirada": return "#0891B2";
        case "Endereço inválido": return "#DC2626";
        case "Extraviado": return "#991B1B";
        default: return "#6B7280";
    }
}

export function EncomendaCard({ id, codigo, status, data, onDeletar }) {
    return (
        <div style={{
            borderRadius: "10px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            boxSizing: "border-box"
        }}>
            <header style={{
                backgroundColor: "#ED361E",
                color: "white",
                padding: "0.75em 1.25em",
                textAlign: "left"
            }}>
                <h5 style={{ margin: "0", fontSize: "clamp(12px, 2vw, 15px)", wordBreak: "break-all" }}>{codigo}</h5>
            </header>

            <div style={{
                backgroundColor: "white",
                padding: "1.25em",
                textAlign: "left",
                gap: "10px",
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <p style={{ margin: "0", fontSize: "14px", color: "#6b7280" }}>
                    {new Date(data).toLocaleDateString("pt-BR")}
                </p>
                <div style={{
                    backgroundColor: corDoStatus(status),
                    padding: "0.2em 0.6em",
                    borderRadius: "10px",
                    color: "white",
                    width: "fit-content",
                    alignSelf: "flex-end",
                    fontSize: "clamp(11px, 1.5vw, 13px)",
                    whiteSpace: "nowrap"
                }}>
                    <p style={{ padding: "0", margin: "0", display: "inline" }}>{status}</p>
                </div>
                <button onClick={() => onDeletar(id)} style={{
                    backgroundColor: "transparent",
                    border: "1px solid #ED361E",
                    color: "#ED361E",
                    borderRadius: "5px",
                    cursor: "pointer",
                    padding: "0.3em 0.5em",
                    alignSelf: "flex-end",
                    fontSize: "13px",
                    marginTop: "auto"
                }}>
                    Remover
                </button>
            </div>
        </div>
    );
}