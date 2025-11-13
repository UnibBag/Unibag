<?php
require_once '../config/conn.php';

$id = $_GET['id'] ?? null;

if ($id) {
    $sql = "SELECT * FROM mercados WHERE id = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    echo json_encode($stmt->fetch(PDO::FETCH_ASSOC));
} else {
    echo json_encode(["erro" => "ID não informado."]);
}
?>
