<?php
require_once '../config/conn.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'];
    $cnpj = $_POST['cnpj'];
    $endereco = $_POST['endereco'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $valor_minimo = $_POST['valor_minimo'];

    $sql = "INSERT INTO mercados (nome, cnpj, endereco, telefone, email, valor_minimo)
            VALUES (:nome, :cnpj, :endereco, :telefone, :email, :valor_minimo)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':cnpj', $cnpj);
    $stmt->bindParam(':endereco', $endereco);
    $stmt->bindParam(':telefone', $telefone);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':valor_minimo', $valor_minimo);

    if ($stmt->execute()) {
        echo "Mercado cadastrado com sucesso!";
    } else {
        echo "Erro ao cadastrar mercado.";
    }
}
?>
