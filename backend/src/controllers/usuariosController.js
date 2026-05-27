import connection from "../database/connection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function cadastrar(req, res) {
    const { nome, email, senha } = req.body;

    try {
        const senhaHash = await bcrypt.hash(senha, 10);
        await connection.execute(
            "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
            [nome, email, senhaHash]
        );
        res.status(201).json({ mensagem: "Usuário cadastrado com sucesso" });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao cadastrar usuário", erro: error.message });
    }
}

export async function login(req, res) {
    const { email, senha } = req.body;

    try {
        const [rows] = await connection.execute(
            "SELECT * FROM usuarios WHERE email = ?",
            [email]
        );

        if (rows.length === 0) {
            return res.status(401).json({ mensagem: "Email ou senha inválidos" });
        }

        const usuario = rows[0];
        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        if (!senhaValida) {
            return res.status(401).json({ mensagem: "Email ou senha inválidos" });
        }

        const token = jwt.sign(
            { id: usuario.id, email: usuario.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({ token });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao fazer login", erro: error.message });
    }
}

export async function atualizar(req, res) {
    const { id } = req.params;
    const { email, senha } = req.body;

    try {
        const senhaHash = await bcrypt.hash(senha, 10);
        await connection.execute(
            "UPDATE usuarios SET senha = ? WHERE id = ?",
            [senhaHash, id]
        );
        res.json({ mensagem: "Senha atualizada com sucesso" });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar senha", erro: error.message });
    }
}

export async function deletar(req, res) {
    const { id } = req.params;

    try {
        await connection.execute("DELETE FROM usuarios WHERE id = ?", [id]);
        res.json({ mensagem: "Usuário deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao deletar usuário", erro: error.message });
    }
}