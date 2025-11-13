<?php
require_once __DIR__ . '/../controllers/usuarioController.php';

// Este arquivo apenas chama o controller.
// Você pode acessá-lo via requisições HTTP POST ou GET.
// Exemplo: POST para criar, GET para listar.

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $usuarios = $usuarioModel->listar();
    echo json_encode($usuarios);
}
?>
