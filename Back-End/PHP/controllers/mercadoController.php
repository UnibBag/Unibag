<?php
require_once __DIR__ . '/../models/Mercado.php';
require_once __DIR__ . '/../config/db.php';

$mercadoModel = new Mercado($pdo);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['acao'])) {
    $acao = $_POST['acao'];

    switch ($acao) {
        case 'criar':
            $mercadoModel->criar($_POST['nome'], $_POST['cnpj'], $_POST['endereco'], $_POST['valor_minimo_compra']);
            echo json_encode(['mensagem' => 'Mercado criado com sucesso!']);
            break;

        case 'atualizar':
            $mercadoModel->atualizar($_POST['id'], $_POST['nome'], $_POST['cnpj'], $_POST['endereco'], $_POST['valor_minimo_compra'], $_POST['status']);
            echo json_encode(['mensagem' => 'Mercado atualizado com sucesso!']);
            break;

        case 'excluir':
            $mercadoModel->excluir($_POST['id']);
            echo json_encode(['mensagem' => 'Mercado excluído com sucesso!']);
            break;
    }
}
?>
