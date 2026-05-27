import connection from "../database/connection.js";

export async function listar(req, res) {
    const usuario_id = req.usuario.id;

    try {
        const [rows] = await connection.execute(
            "SELECT * FROM encomendas WHERE usuario_id = ?",
            [usuario_id]
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao listar encomendas", erro: error.message });
    }
}

export async function adicionar(req, res) {
    const usuario_id = req.usuario.id;
    const { codigo } = req.body;

    try {
        const status = "Em trânsito";

        await connection.execute(
            "INSERT INTO encomendas (usuario_id, codigo, status) VALUES (?, ?, ?)",
            [usuario_id, codigo, status]
        );

        res.status(201).json({ mensagem: "Encomenda adicionada com sucesso", status });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao adicionar encomenda", erro: error.message });
    }
}

export async function deletar(req, res) {
    const { id } = req.params;
    const usuario_id = req.usuario.id;

    try {
        await connection.execute(
            "DELETE FROM encomendas WHERE id = ? AND usuario_id = ?",
            [id, usuario_id]
        );
        res.json({ mensagem: "Encomenda deletada com sucesso" });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao deletar encomenda", erro: error.message });
    }
}