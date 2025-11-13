<?php
require_once __DIR__ . '/../models/Usuario.php';
require_once __DIR__ . '/../config/db.php';

$usuarioModel = new Usuario($pdo);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['acao'])) {
    $acao = $_POST['acao'];

    switch ($acao) {
        case 'criar':
            $usuarioModel->criar($_POST['nome'], $_POST['email'], $_POST['senha'], $_POST['endereco'], $_POST['telefone']);
            echo json_encode(['mensagem' => 'Usuário criado com sucesso!']);
            break;

        case 'login':
            $usuario = $usuarioModel->login($_POST['email'], $_POST['senha']);
            if ($usuario) {
                echo json_encode(['mensagem' => 'Login bem-sucedido!', 'usuario' => $usuario]);
            } else {
                echo json_encode(['erro' => 'Credenciais inválidas.']);
            }
            break;

        case 'atualizar':
            $usuarioModel->atualizar($_POST['id'], $_POST['nome'], $_POST['email'], $_POST['endereco'], $_POST['telefone']);
            echo json_encode(['mensagem' => 'Usuário atualizado com sucesso!']);
            break;

        case 'excluir':
            $usuarioModel->excluir($_POST['id']);
            echo json_encode(['mensagem' => 'Usuário excluído com sucesso!']);
            break;
    }
}
?>
