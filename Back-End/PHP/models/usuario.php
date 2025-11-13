<?php
class Usuario {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // Criar usuário
    public function criar($nome, $email, $senha, $endereco, $telefone, $tipo_usuario = 'cliente') {
        $hash = password_hash($senha, PASSWORD_DEFAULT);
        $sql = "INSERT INTO usuarios (nome, email, senha, endereco, telefone, tipo_usuario)
                VALUES (:nome, :email, :senha, :endereco, :telefone, :tipo_usuario)";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([
            ':nome' => $nome,
            ':email' => $email,
            ':senha' => $hash,
            ':endereco' => $endereco,
            ':telefone' => $telefone,
            ':tipo_usuario' => $tipo_usuario
        ]);
    }

    // Listar todos os usuários
    public function listar() {
        $sql = "SELECT id_usuario, nome, email, endereco, telefone, tipo_usuario FROM usuarios";
        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Buscar usuário por ID
    public function buscarPorId($id) {
        $sql = "SELECT id_usuario, nome, email, endereco, telefone, tipo_usuario FROM usuarios WHERE id_usuario = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([':id' => $id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Atualizar usuário
    public function atualizar($id, $nome, $email, $endereco, $telefone) {
        $sql = "UPDATE usuarios 
                SET nome = :nome, email = :email, endereco = :endereco, telefone = :telefone
                WHERE id_usuario = :id";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([
            ':nome' => $nome,
            ':email' => $email,
            ':endereco' => $endereco,
            ':telefone' => $telefone,
            ':id' => $id
        ]);
    }

    // Excluir usuário
    public function excluir($id) {
        $sql = "DELETE FROM usuarios WHERE id_usuario = :id";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([':id' => $id]);
    }

    // Login de usuário
    public function login($email, $senha) {
        $sql = "SELECT * FROM usuarios WHERE email = :email";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([':email' => $email]);
        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($usuario && password_verify($senha, $usuario['senha'])) {
            return $usuario;
        }
        return false;
    }
}
?>
