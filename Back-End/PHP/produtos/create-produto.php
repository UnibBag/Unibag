<?php
require_once '../config/conn.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mercado_id = $_POST['mercado_id'];
    $nome = $_POST['nome'];
    $descricao = $_POST['descricao'];
    $preco = $_POST['preco'];
    $estoque = $_POST['estoque'];
    $imagem = $_POST['imagem'];

    $sql = "INSERT INTO produtos (mercado_id, nome, descricao, preco, estoque, imagem)
            VALUES (:mercado_id, :nome, :descricao, :preco, :estoque, :imagem)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':mercado_id', $mercado_id);
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':descricao', $descricao);
    $stmt->bindParam(':preco', $preco);
    $stmt->bindParam(':estoque', $estoque);
    $stmt->bindParam(':imagem', $imagem);

    if ($stmt->execute()) {
        echo "Produto cadastrado com sucesso!";
    } else {
        echo "Erro ao cadastrar produto.";
    }
}
?>
