<?php
$arquivoJson = '../scripts/js/data/equipamentos.json';

if (file_exists($arquivoJson)) {
    $conteudoJson = file_get_contents($arquivoJson);
    echo $conteudoJson;
} else {
    echo json_encode(['erro' => 'Arquivo JSON não encontrado']);
}
?>

