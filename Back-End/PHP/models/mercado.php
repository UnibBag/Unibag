<?php
class Mercado {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // Criar mercado
    public function criar($nome, $cnpj, $endereco, $valor_minimo_compra, $status = 'ativo') {
        $sql = "INSERT INTO mercados (nome, cnpj, endereco, valor_minimo_compra, status)
                VALUES (:nome, :cnpj, :endereco, :valor_minimo_compra, :status)";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([
            ':nome' => $nome,
            ':cnpj' => $cnpj,
            ':endereco' => $endereco,
            ':valor_minimo_compra' => $valor_minimo_compra,
            ':status' => $status
        ]);
    }

    // Listar todos os mercados
    public function listar() {
        $sql = "SELECT * FROM mercados";
        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Buscar mercado por ID
    public function buscarPorId($id) {
        $sql = "SELECT * FROM mercados WHERE id_mercado = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([':id' => $id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Atualizar mercado
    public function atualizar($id, $nome, $cnpj, $endereco, $valor_minimo_compra, $status) {
        $sql = "UPDATE mercados 
                SET nome = :nome, cnpj = :cnpj, endereco = :endereco, 
                    valor_minimo_compra = :valor_minimo_compra, status = :status
                WHERE id_mercado = :id";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([
            ':nome' => $nome,
            ':cnpj' => $cnpj,
            ':endereco' => $endereco,
            ':valor_minimo_compra' => $valor_minimo_compra,
            ':status' => $status,
            ':id' => $id
        ]);
    }

    // Excluir mercado
    public function excluir($id) {
        $sql = "DELETE FROM mercados WHERE id_mercado = :id";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([':id' => $id]);
    }
}
?>
