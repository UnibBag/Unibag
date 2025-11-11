<?php
require_once '../config/conn.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];

    $sql = "DELETE FROM mercados WHERE id = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $id);

    if ($stmt->execute()) {
        echo "Mercado excluído com sucesso!";
    } else {
        echo "Erro ao excluir mercado.";
    }
}
?>
