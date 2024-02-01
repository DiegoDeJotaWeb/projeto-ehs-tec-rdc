<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Equipamentos</title>
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

        <form class="filtro">
            <label for="selectEquipamentos">Equipamento</label>
            <select name="" id="selectEquipamentos" class="filtro__inputContainer">
                <option value="">Selecione um equipamento</option>
            </select>
        </form>


        <div class="container">


            <div class="row form-eqpt">
                <div class="col col-9">
                    <div class="row">
                        <div class="col col-2 "><label for="codigo">Codigo</label></div>
                        <div class="col col-2"> <input type="text" name="codigo" id="codigo"></div>
                    </div>
                    <div class="row">
                        <div class="col col-2"><label for="modelo">modelo</label></div>
                        <div class="col col-6"> <input type="text" name="modelo" id="modelo"></div>
                    </div>
                    <div class="row">
                        <div class="col col-2"><label for="serie">Serie</label></div>
                        <div class="col col-2"> <input type="text" name="serie" id="serie"></div>
                    </div>
                    <div class="row">
                        <div class="col col-2"><label for="tipo">Tipo</label></div>
                        <div class="col col-1"> <input type="text" name="" id=""></div>
                        <div class="col col-4"> <input type="text" name="tipo" id="tipo"></div>
                    </div>
                    <div class="row">
                        <div class="col col-2"><label for="">Fabricante</label></div>
                        <div class="col col-10"> <input type="text" name="fabricante" id="fabricante" disabled></div>
                    </div>
                    <div class="row">
                        <div class="col col-2"><label for="">Capacidades</label></div>
                        <div class="col col-1"><label for="cap-min">Mín</label></div>
                        <div class="col col-4"> <input type="text" name="cap-min" id="cap-min"></div>
                        <div class="col col-1"><label for="cap-max">Máx</label></div>
                        <div class="col col-4"> <input type="text" name="cap-max" id="cap-max"></div>
                    </div>
                </div>
                <div class="col col-3">
                    <img src="img/equipamentos/equipamento.png" alt="" id="image">
                </div>
            </div>

            <div class="row form-eqpt">
                <div class="col col-9">
                    <div class="row">
                        <div class="col col-2"><label for="escala">Escala</label></div>
                        <div class="col col-2"><input type="text" name="escala" id="escala"></div>
                        <div class="col col-2 "><label for="localizacao">Lacalização</label></div>
                        <div class="col col-1"> <input type="text" name="" id=""></div>
                        <div class="col col-5"> <input type="text" name="localizacao" id="localizacao"></div>
                    </div>
                    <div class="row">
                        <div class="col col-2"><label for="situacao">Situação</label></div>
                        <div class="col col-2"> <input type="text" name="situacao" id="situacao"></div>
                    </div>
                </div>

            </div>

            <div class="flex-end" id="detalhesEquipamento">
                <button class="btn" id="verCalibracoesBtn">Calibar</button>
                <button class="btn" id="limparDetalhesEquipamentoBtn">Limpar</button>
                <button class="btn">Cancelar</button>
            </div>
        </div>

    </main>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="scripts/js/custom.js"></script>

</body>

</html>