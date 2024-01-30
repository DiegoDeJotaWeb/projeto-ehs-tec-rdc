<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Equipamentos</title>
    <link rel="stylesheet" href="css/style.css">
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
        <h1 class="title">Consulta equipamento</h1>
        <div class="filtro">
            <form action="" class="flex">
                <label for="selectEquipamentos" class="filtro__inputLabel">Equipamento</label>
                <select name="" id="selectEquipamentos" class="filtro__inputContainer">
                    <option value="">Selecione um equipamento</option>
                </select>
            </form>
        </div>

        <div class="form-eqpt ">
            <div class="flex-column">
                <div class="flex-wrap-reverse">
                    <div class="flex-column">
                        <div class="container-input">
                            <label for="codigo">Código</label>
                            <input texto="text" name="codigo" id="codigo">
                        </div>
                        <div class="container-input">
                            <label for="modelo">Modelo</label>
                            <input texto="text" name="modelo" id="modelo">
                        </div>

                        <div class="container-input">
                            <label for="serie">Serie</label>
                            <input texto="text" name="serie" id="serie">
                        </div>

                        <div class="container-input">
                            <label for="tipo">Tipo</label>
                            <input texto="text" name="tipo" id="tipo">
                        </div>

                        <div class="container-input">
                            <label for="fabricante">Fabricante</label>
                            <input texto="text" name="fabricante" id="fabricante">
                        </div>

                        <div class="container-input">
                            <label for="">Capacidade</label>
                            <label for="cap-min" class="label-cap">Min</label>
                            <input texto="text" name="cap-min" id="cap-min">
                            <label for="cap-max" class="label-cap">Max</label>
                            <input texto="text" name="cap-max" id="cap-max">
                        </div>
                    </div>
                    <div class="box-img">
                        <img src="img/equipamentos/equipamento.png" alt="" id="image">
                    </div>
                </div>

                <div class="container-input">
                    <label for="escala">Escala</label>
                    <input texto="text" name="escala" id="escala">
                    <label for="localizacao">Localização</label>
                    <input texto="text" name="localizacao" id="localizacao">
                </div>

                <div class="container-input">
                    <label for="situacao">Situação:</label>
                    <input texto="text" name="situacao" id="situacao">
                </div>

            </div>
        </div>

        <div class="flex-end " id="detalhesEquipamento">
            <button class="btn__secondary " id="verCalibracoesBtn">Calibar</button>
            <button class="btn__secondary ">Limpar</button>
            <button class="btn__secondary ">Cancelar</button>
        </div>

    </main>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="scripts/js/custom.js"></script>

</body>

</html>