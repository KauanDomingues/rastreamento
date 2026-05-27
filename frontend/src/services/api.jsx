const BASE_URL = "http://localhost:3000";

export async function login(email, senha) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
    });
    return response.json();
}

export async function listarEncomendas(token) {
    const response = await fetch(`${BASE_URL}/encomendas`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.json();
}

export async function adicionarEncomenda(codigo, token) {
    const response = await fetch(`${BASE_URL}/encomendas`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ codigo })
    });
    return response.json();
}

export async function deletarEncomenda(id, token) {
    const response = await fetch(`${BASE_URL}/encomendas/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.json();
}