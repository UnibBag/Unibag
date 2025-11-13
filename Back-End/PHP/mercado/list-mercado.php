<?php
require_once '../config/conn.php';

$sql = "SELECT * FROM mercados";
$stmt = $conn->query($sql);

$mercados = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($mercados);
?>
