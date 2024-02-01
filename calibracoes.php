<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calibrações</title>
    <link rel="stylesheet" href="css/custom.css">
</head>

<body>
    <header class="header">
        <img src="img/logo.png" alt="" class="header__logo">
        <div class="header__titulo">
            Sistema de gerenciamento de EHS
        </div>
    </header>

    <main class="conteudo">

        <h1 class="title">Selecione um equipamento</h1>

        <form class="filtro">
            <label for="selectEquipamentos">Equipamento</label>
            <select name="" id="selectEquipamentos" class="filtro__inputContainer">
                <option value="">Selecione um equipamento</option>
            </select>
        </form>


        <div class="container">
            <table class="table-cal">
                <thead>
                    <tr>
                        <td>Laboratorio</td>
                        <td>Certificado</td>
                        <td>Norma</td>
                        <td>DtCalibração</td>
                        <td>Prazo Calibração</td>
                        <td>Prox. Calibração</td>
                    </tr>
                </thead>
                <?php include 'vendor/calibracoes.php'; ?>
            </table>
        </div>
    </main>
</body>

</html>