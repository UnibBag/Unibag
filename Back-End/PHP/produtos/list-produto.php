<?php
require_once '../config/conn.php';

$mercado_id = $_GET['mercado_id'] ?? null;

if ($mercado_id) {
    $sql = "SELECT * FROM produtos WHERE mercado_id = :mercado_id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':mercado_id', $mercado_id);
    $stmt->execute();
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
} else {
    $sql = "SELECT * FROM produtos";
    $stmt = $conn->query($sql);
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}
?>
