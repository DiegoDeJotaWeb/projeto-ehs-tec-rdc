function detalhe(card) {
    switch (card.id) {
      case '1':
        abreModal()
        saldoMinimo()
        break;
      case '2':
        console.log('Produtos vencidos.');
        break;
      case '3':
        console.log('CA vencidos.');
        break;
      case '4':
        console.log('90 dias');
        break;
      default:
    }
}


// Inicio Saldo Minimo
var contrHeader = 0;
var contrLote = 0;

// 

function saldoMinimo() {
    var html = "";

    $(".detalhe__titulo").html("Produtos Com Saldo Minimo")
    $.post('/scripts/php/indicadores.php', {
        menu: '1' 
    }, function(res) {
        var obj = JSON.parse(res);
            html2 = '<form method="post" action="scripts/php/dashboard/saldoMinimo.php" id="frm_etiq" class="formName">';
            
            html += '<div class="modal__content">'+
            '<div class="lista__container--dashboard" id="prodHeader">'+
            '<span class="lista__span--titulo input--10">Produto</span>'+
            '<span class="lista__span--titulo input--35">Descrição</span>'+
            '<span class="lista__span--titulo input--10">CA</span>'+
            '<span class="lista__span--titulo input--10">Unidade</span>'+
            '<span class="lista__span--titulo input--10">Saldo</span>'+
            '<span class="lista__span--titulo input--10">Min p/ Compra</span>'+ 
            '</div>';

            for (var i = 0; i < obj.length; i++) {
                html += '<div class="lista__container--dashboard" id="item_'+i+'">'+
                   '<input type="text" class="lista__span--item input--10" name="prod_'+i+'" id="prod_'+i+'" value="'+obj[i].produto+'" disabled>'+
                   '<span class="lista__span--item input--35">'+obj[i].descricao+'</span>'+
                   '<span class="lista__span--item input--10">'+obj[i].codca+'&nbsp;</span>'+
                   '<span class="lista__span--item input--10">'+obj[i].unidade+'</span>'+
                   '<span class="lista__span--item input--10">'+obj[i].qtdsaldo+'</span>';
                   if (obj[i].qtdmincompra == '0') {
                    html += '<input class="lista__span--item input--10" name="qtd_'+i+'" id="qtd_'+i+'" type="number" min="1" value="'+obj[i].qtdmincompra+'" disabled>';
                   }else {
                    html += '<input class="lista__span--item input--10" name="qtd_'+i+'" id="qtd_'+i+'" type="number" min="'+obj[i].qtdmincompra+'" value="'+obj[i].qtdmincompra+'" disabled>';
                   }
                   html += '<div class="checkbox-container">'+
                   '<label class="checkbox-label">'+
                   '<input type="checkbox" onclick="desabilitar(this)" name="ativo_'+i+'" id="ativo_'+i+'" />'+
                   '<span class="checkbox-custom rectangular"></span>'+
                   '</label>'+
                   '</div>'+
               '</div>';
            }
            html += '</div>';
            $(".detalhe").append(html2);
            $(".formName").append(html);
            

            let html1 = '';

            html1 += '<div class="modal__footer"><div class="formulario__btn">'+
            '<label class="modal__label" for="ativo">Selecionar Todos:</label>'+
            '<div class="checkbox-container">'+
            '<label class="checkbox-label">'+
            '<input type="checkbox" id="checkTodos" name="checkTodos" />'+
            '<span class="checkbox-custom rectangular"></span>'+
            '</label>'+
            '</div>'+
            '<button class="btn__primary btn--sucess" type="submit">'+
            '<span class="btn__label--white">Solicitar</span>'+
            '</button>'+
            '</div>'+
            '</div>'+
            '</form>';


            $(".formName").append(html1);

            var checkTodos = $("#checkTodos");
            checkTodos.click(function () {
              if ( $(this).is(':checked') ){
                $('input:checkbox').prop("checked", true);
                $('input[type=text]').prop("readonly", true);
                $('input[type=number]').prop("disabled", false);
                $('input[type=number]').removeClass('lista__span--item');
                $('input[type=number]').addClass('lista__span--input');
              }else{
                $('input:checkbox').prop("checked", false);
                $('input[type=text]').prop("readonly", false);
                $('input[type=number]').prop("disabled", true);
                $('input[type=number]').removeClass('lista__span--input');
                $('input[type=number]').addClass('lista__span--item');
              }
            });
    })
}

function desabilitar(item) {
    console.log(item)

    id = item.id.split('_')[1];
    
    if($('#'+item.id).is(":checked")) {
        $("#prod_"+id).prop('disabled', false);
        $("#qtd_"+id).prop('disabled', false);
        $("#qtd_"+id).removeClass('lista__span--item');
        $("#qtd_"+id).addClass('lista__span--input');
        console.log(2)
    } else {
        $("#prod_"+id).prop('disabled', true);
        $("#qtd_"+id).prop('disabled', true);
        $("#qtd_"+id).removeClass('lista__span--input');
        $("#qtd_"+id).addClass('lista__span--item');
    }

}

// Fim Saldo Minimo

function abreModal() {
    $('.modal').show();
}

function fechaModal() {
    $('.modal').hide();
    $('.formName').remove();  
}


