<?php
require_once __DIR__ . '/../controllers/mercadoController.php';

// GET → listar mercados
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        $mercado = $mercadoModel->buscarPorId($_GET['id']);
        echo json_encode($mercado);
    } else {
        $mercados = $mercadoModel->listar();
        echo json_encode($mercados);
    }
}
?>
