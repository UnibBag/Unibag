<?php
require_once '../config/conn.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $nome = $_POST['nome'];
    $endereco = $_POST['endereco'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $valor_minimo = $_POST['valor_minimo'];

    $sql = "UPDATE mercados 
            SET nome = :nome, endereco = :endereco, telefone = :telefone, email = :email, valor_minimo = :valor_minimo
            WHERE id = :id";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':endereco', $endereco);
    $stmt->bindParam(':telefone', $telefone);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':valor_minimo', $valor_minimo);

    if ($stmt->execute()) {
        echo "Mercado atualizado com sucesso!";
    } else {
        echo "Erro ao atualizar mercado.";
    }
}
?>
