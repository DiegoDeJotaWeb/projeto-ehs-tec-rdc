<?php
$arquivoJson = 'scripts/js/data/calibracoes.json';
if (file_exists($arquivoJson)) {
    $conteudoJson = file_get_contents($arquivoJson);
    $calibracoes = json_decode($conteudoJson, true);
    $codigoEquipamento = isset($_GET['codigoEquipamento']) ? $_GET['codigoEquipamento'] : '';
    $calibracoesEquipamento = array_filter($calibracoes['calibracoes'], function ($calibracao) use ($codigoEquipamento) {
        return $calibracao['codigo_equipamento'] === $codigoEquipamento;
    });
    if (!empty($calibracoesEquipamento)) {
        foreach ($calibracoesEquipamento as $calibracao) {
            echo ' <tbody><tr>';
            echo '<td>' . $calibracao['laboratorio'] . '</td>';
            echo '<td>' . $calibracao['certificado'] . '</td>';
            echo '<td>' . $calibracao['norma'] . '</td>';
            echo '<td>' . $calibracao['data_calibracao'] . '</td>';
            echo '<td>' . $calibracao['prazo_calibracao'] . '</td>';
            echo '<td>'  . $calibracao['proxima_calibracao'] . '</td>';
            echo '<td class="btn"> <a href="' . $calibracao['link_certificado'] . ' " target="_blank">Arquivo</a></td>';
            echo '</tr> </tbody>';
        }
    } else {
        echo '<p>Nenhuma calibração encontrada para o equipamento ' . $codigoEquipamento . '</p>';
    }
} else {
    echo '<p>Arquivo JSON de calibrações não encontrado</p>';
}
?>
