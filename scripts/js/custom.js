function carregarEquipamentos() {
    $.ajax({
        url: 'vendor/equipamentos.php',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $('#selectEquipamentos').empty();

            $('#selectEquipamentos').append('<option value="">Selecione...</option>');

            $.each(data.equipamentos, function (index, equipamento) {
                $('#selectEquipamentos').append('<option value="' + equipamento.codigo + '">' + equipamento.codigo + '</option>');
            });
        },
        error: function (xhr, status, error) {
            console.error("Erro ao carregar os equipamentos:", status, error);
        }
    });
}

$(document).ready(function () {
    carregarEquipamentos();

    $('#selectEquipamentos').change(function () {
        var codigoSelecionado = $(this).val();
        if (codigoSelecionado !== "") {
            exibirDetalhesEquipamento(codigoSelecionado);
        } else {
            $('#detalhesEquipamento').html('');
        }
    });

    $('#detalhesEquipamento').on('click', '#verCalibracoesBtn', function () {

        var codigoEquipamento = $('#selectEquipamentos').val();
        if (codigoEquipamento !== "") {
            window.location.href = 'calibracoes.php?codigoEquipamento=' + codigoEquipamento;
        }
    });
});

function exibirDetalhesEquipamento(codigoEquipamento) {
    $.ajax({
        url: 'vendor/equipamentos.php',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var equipamentoSelecionado = data.equipamentos.find(function (equipamento) {
                return equipamento.codigo === codigoEquipamento;
            });

            $('#codigo').val(equipamentoSelecionado.codigo);
            $('#modelo').val(equipamentoSelecionado.modelo);
            $('#serie').val(equipamentoSelecionado.serie);
            $('#tipo').val(equipamentoSelecionado.tipo);
            $('#fabricante').val(equipamentoSelecionado.fabricante);
            $('#cap-min').val(equipamentoSelecionado.capacidade.minima);
            $('#cap-max').val(equipamentoSelecionado.capacidade.maxima);
            $('#escala').val(equipamentoSelecionado.escala);
            $('#localizacao').val(equipamentoSelecionado.localizacao);
            $('#situacao').val(equipamentoSelecionado.situacao);
            $("#image").attr("src", equipamentoSelecionado.imagem);
        },
        error: function (xhr, status, error) {
            console.error("Erro ao carregar os detalhes do equipamento:", status, error);
        }
    });
}


// limpar dados

$("#limparDetalhesEquipamentoBtn").click(function () {
    $('#codigo').val('');
    $('#modelo').val('');
    $('#serie').val('');
    $('#tipo').val('');
    $('#fabricante').val('');
    $('#cap-min').val('');
    $('#cap-max').val('');
    $('#escala').val('');
    $('#localizacao').val('');
    $('#situacao').val('');
    $('#image').attr("src", 'img/equipamentos/equipamento.png');
    $('#selectEquipamentos').val('');
});