/*
** FUNCOES SIDEBAR
*/

// Dropdown da sidebar
$(function(){
    $(".modulo__btn").click(function(e){
        //Variaveis
        el = $(this).data('element');
        arrow = $(this).children(".rotate");
        aux = $(el).is(":visible");

        if (aux == true) {
            $(arrow).toggleClass("down");
            $(el).slideToggle('oculta'); 
        }else {
            // Fecha demais menus
            $('.modProg').hide();
            $('.modulo__icon').removeClass('down');
            // Abre menu
            $(arrow).toggleClass("down");
            $(el).slideToggle('oculta');
        }
    });
});

/* Abre e fecha sidebar */
function sbResponsive() {
    $(".sbResponsive__icon").toggleClass("arrow--open");
    $(".sidebar").animate({width: "toggle"},150);
    

    $(".programa").toggleClass("programa--sbAberto");
    $(".filtro").toggleClass("filtro--sbAberto");
}

$(document).ready(
    function () {
        let href = [location.pathname, location.search];
        let link = $('.link[href="' + href[0] + '"]');

        let target = $(link).closest('.modProg');
        let arrow = $(target).closest('.modulo');
        arrow = $(arrow).children(".modulo__btn");
        arrow = $(arrow).children(".rotate");

        // acerta icone do menu
        $(target).removeClass('oculta');
        $(arrow).addClass('down'); 
        //Mostra todos os itens da opcao + item selecionado
        $(link).removeClass('modProg__titulo');
        $(link).addClass('sbActive');
    }
);






/* Muda Filial */
function mudafil() {
    var frm = document.getElementById('mudafil');
    
    frm.submit();
}



$(document).ready(
    function () {
        var url = window.location.href;
        if(url == "http://ehs.tec-rdc.com.br/" || url == "http://ehs.tec-rdc.com.br/index.php"){
            sbResponsive();
        }
    }
);

// Função data e hora do menu
function relogio(){
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();

    var hor = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();


    if(hor < 10){
        hor = "0" + hor;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(seg < 10){
        seg = "0" + seg;
    }

    if(dia < 10){
        dia = "0" + dia;
    }
    if(mes < 10){
        mes = "0" + mes;
    }

    var horas = hor + ":" + min + ":" + seg;
    var calendario = dia + "/" + mes + "/" + ano;

    var rel = document.getElementById("time");
    var calen = document.getElementById("date");

    calen.innerHTML = calendario;
    rel.innerHTML = horas;
}

var timer=setInterval(relogio,1000);

function sair() {
    $.confirm({
        boxWidth: '30%',
        useBootstrap: false,
        title: 'Encerrar Sessão?',
        type: 'dark',
        content: 'Você realmente deseja encerrar a sessão?',
        autoClose: 'logoutUser|6000',
        buttons: {
            logoutUser: {
                text: 'Sair',
                action: function () {
                window.location.replace("/scripts/php/logout.php");
                }
            },
            cancel: {
            text: 'Cancelar',
            // action: function () {
            //     $.alert('The user was logged out');
            // }
            }
        }
    });
}


/*
** FUNCOES PAGINAS DOS PROGRAMAS
*/
function cancelar() {
    $.confirm({
        boxWidth: '30%',
        useBootstrap: false,
        title: 'Sair!',
        type: 'red',
        content: 'Deseja mesmo sair desta pagina?',
        buttons: {
            Ok:{
                text: 'SIM (SAIR)',
                action: function () {
                    window.location.replace("/");
                }
            },
            Cancelar: {
                text: 'NÃO',
                btnClass: 'btn-red',
                // action: function () {
                //     $.alert('You clicked on "Não"');
                // }
            }
        }
    });
}

// recarregar a pagina sem parametro
function redireciona(url){
    window.location = url;
}

// Envia forms de filtros de busca
function pesquisa(id) {
    var el = document.getElementById(id);
    el.submit();
}


/*
** MENUS INTERNOS DAS PAGINAS
*/
$(function(){
    $(".frm-menu-btn").click(function(e){
        var get = $(this).val()
        // get = get.split('#')
        // get = get[1]
        var aux = '';
        switch (get) {
            case 'op1':
                $(this).addClass('frm-menu-selected');
                $('#op2').removeClass('frm-menu-selected');
                $('#op3').removeClass('frm-menu-selected');
                window.location.assign("#inserir");
                $('#consult').addClass("oculta");
                $('#update').addClass("oculta");
                $('#insert').removeClass("oculta");
                break;
            case 'op2':
                $(this).addClass('frm-menu-selected');
                $('#op1').removeClass('frm-menu-selected');
                $('#op3').removeClass('frm-menu-selected');
                window.location.assign("#consulta")
                $('#insert').addClass("oculta");
                $('#update').addClass("oculta");
                $('#consult').removeClass("oculta");
                break;
            case 'op3':
                $(this).addClass('frm-menu-selected');
                $('#op2').removeClass('frm-menu-selected');
                $('#op1').removeClass('frm-menu-selected');
                window.location.assign("#alterar");
                $('#consult').addClass("oculta");
                $('#insert').addClass("oculta");
                $('#update').removeClass("oculta");
                break;
            default:
        }              
    });
});

$(document).ready(function(){
    var url = window.location.href;
    url = url.split('#');
    url = url[1];

    switch (url) {
        case 'inserir':
            $('#op1').addClass('frm-menu-selected');
            $('#consult').addClass("oculta");
            $('#update').addClass("oculta");
            $('#insert').removeClass("oculta");
            break;
        case 'consulta':
            $('#op2').addClass('frm-menu-selected');
            $('#insert').addClass("oculta");
            $('#update').addClass("oculta");
            $('#consult').removeClass("oculta");
            break;
        case 'alterar':
            $('#op3').addClass('frm-menu-selected');
            $('#insert').addClass("oculta");
            $('#consult').addClass("oculta");
            $('#update').removeClass("oculta");
            break;
    }
})

function notificacao(titulo,texto) {
    toastr.warning(texto,titulo);
}

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-custom",
    "preventDuplicates": false,
    "onclick": null,
    "extendedTimeOut": false,
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}


/*
** GERA DIV DE LISTAGEM DE ITENS
*/


/* Modal observação produto */
function abreModal(id) {
    $('#modal_'+id).show();
}

function fechaModal(id) {
    $('#modal_'+id).hide();
}



//Contador para controle das div geradas
var idContador = 0;
var header = 0;


//Funcao para excluir itens da lista
function exclui(input,obs){
    var campo = $("#"+input.id);
    var modal = $("#"+obs.id);
    // campo.hide(300).$(this).remove();
    campo.hide(300, function() { $(this).remove(); });
    modal.hide(300, function() { $(this).remove(); });
    if($('.controle').length <= 1) {
        $('#prodHeader').hide(300, function() { $(this).remove() });
        header = 0
    }
    
    console.log($('.controle').length)
}


function adicionaHeader(qtde) {
    var html = "";

    if(header == 0) {
        header++;
        html += '<div class="lista__container" id="prodHeader">';
        html += '<span class="lista__span--titulo input--15 lista__radius--left">Produto</span>';
        html += '<span class="lista__span--titulo input--45 ">Descrição</span>';
        if(qtde == true){
            html += '<span class="lista__span--titulo input--10 lista__radius--right">Qtde</span>';
        }
        html += "</div>";
    
        $("#sel-saida").append(html);
    } 


}

function adicionaModal(id,valor) {

    var html = "";

    html += "<div class='modal' id='modal_"+id+"'>"
    html += "<div class='modal-content'>";
    html += "<div class='modal-header'>";
    html += "<span class='close' onclick='fechaModal("+id+")'>&times;</span>";
    html += "</div>";
    html += "<div class='modal-body'>";
    html += "<div class='formulario__container modal__input'>";
    html += "<label class='formulario__label' for='nome'>Observação:</label>";
    html += "<textarea class='formulario__textarea input--50' type='textarea' name='obs_"+valor+"' value=''></textarea>";
    html += "<div class='tooltip'>";
    html += "<img src='/img/icons/help-icon-blue.png' class='icon-tooltip' alt=''>";
    html += "<span class='tooltiptext'>";
    html += "<?php echo $help; ?>";
    html += "</span>";
    html += "</div>";
    html += "</div>";
    html += "<div class='formulario__btn'>";
    html += "<button class='btn__primary btn--sucess' type='button' onclick='fechaModal("+id+")'>";
    html += "<span class='btn__label--white'>Salvar</span>";
    html += "</button>";

    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";

    $("#sel-saida").append(html);

}



function adicionaCampo(valor,texto,qtde) {
    idContador++;
    console.log(qtde)

    var id = idContador;

    var html = "";

    html += "<div class='lista__container lista__container--input controle' id='id_"+id+"'>"
    html += "<input class='lista__span--item input--15' type='text' name='produto_cod_"+valor+"' id='produto_"+id+"' value='"+valor+"' readonly required>";
    html += "<input class='lista__span--item input--45' type='text' name='produto_name_"+valor+"' id='produto_name_"+id+"' value='"+texto+"' readonly required >";
    if(qtde == true){
        html += "<input class='lista__input--item input--10' type='number' min='1' name='qtde_"+valor+"' id='qtde_"+id+"' value='1' required >";
        html += "<div class='tooltip'>";
        html += "<span class='lista__icon' onclick='abreModal("+id+")'>";
        html += "<img src='/img/icons/observacao-icon.png' alt=''>";
        html += "</span>";
        html += "<span class='tooltiptext'>Adicionar Observação</span>";
        html += "</div>";
    }
    html += "<div class='tooltip'>";
    html += "<span class='lista__icon' onclick='exclui("+'id_'+id+","+'modal_'+id+")'>";
    html += "<img src='/img/icons/excluir-lixeira-icon.png' alt=''>";

    html += "</span>";
    html += "<span class='tooltiptext'>Excluir item</span>";
    html += "</div>";
    html += "</div>";


    $("#sel-saida").append(html);
    adicionaModal(id,valor);
}


function geraListaProduto(qtde=false) {

    var el = document.getElementById("produto");
    var opcaoTexto = el.options[el.selectedIndex].text;
    var opcaoValor = el.options[el.selectedIndex].value;
    if(opcaoValor == ''){
        notificacao('Produto Invalido','Selecione um produto da lista')
    }else {
        adicionaHeader(qtde);
        adicionaCampo(opcaoValor,opcaoTexto,qtde);
    }

    $(".btnExcluir").click(function(){
        $(this).slideUp(200);
    })

}


/*
** SELECT2 CONFIG
*/
$(document).ready(
    function () {
        $(".input--select2").select2({
            language: {
                noResults: function (params) {
                    return "Desculpe, nada encontrado!";
                }
            }
        });
        $(".input--select2").on("select2:select select2:unselect", function (e) {
            //this returns all the selected item
            items= $(this).val();
        })
    }
);

function selectPlaceholder(id,placeholder) {
    $(id).one('select2:open', function(e) {
        $('input.select2-search__field').prop('placeholder', placeholder);
    });
}

/*
** RESPOSIVE FUNCTIONS
*/
function toggleMobileMenu(menuId) {
    var menu = document.getElementById(menuId);
    $(menu).slideToggle();
}

// $(function(){
//     $(".resposiveItem").click(function(e){
//         e.preventDefault();
//         el = $(this).data('element');
//         $(el).slideToggle();
//     });
// });

/*
** Adiciona zero a esquerda
*/
function addZeroes(num, len) {
    var numberWithZeroes = String(num);
  var counter = numberWithZeroes.length;
      
  while(counter < len) {
  
      numberWithZeroes = "0" + numberWithZeroes;
    
    counter++;
  
    }
  
  return numberWithZeroes;
  }




///////////////////////////////////////////////////////////////////


// $(function($){
//     $(document).ajaxSend(function() {
//       $("#overlay").fadeIn(300);
//     });
          
//     $('#button').click(function(){
//       $.ajax({
//         type: 'GET',
//         success: function(data){
//         }
//       }).done(function() {
//         setTimeout(function(){
//           $("#overlay").fadeOut(300);
//         },500);
//       });
//     });	
//   });

// function validar() {
//     var codUsr = document.getElementById("cod-usr");
//     var nome = document.getElementById("nome");
//     var nomeUsr = document.getElementById("samaccountname");
//     var empresa = document.getElementById("empresa");
//     var filial = document.getElementById("filial");
//     var email = document.getElementById("email");
//     var tipoUsr = document.getElementById("tipo-usr");
//     var menuUsr = document.getElementById("select-menu-usr");
//     var impressora = document.getElementById("impressora");
//     var dirServ = document.getElementById("dir-serv");
//     var dirRede = document.getElementById("dir-rede");

//     // verificar se o nome está vazio
//     if (codUsr.value == "") {
//         toastr.error("Verificar cadastro do usuário no AD.","codigo do usuário não informado!",{timeOut: 5000});
//         return;
//     }
//     if (nome.value == "") {
//         toastr.error("Verificar cadastro do usuário no AD.","Nome não informado!",{timeOut: 5000});
//         return;
//     }
//     if (nomeUsr.value == "") {
//         toastr.error("Verificar cadastro do usuário no AD.","SamAccountName não informado!",{timeOut: 5000});
//         return;
//     }
//     if (empresa.value == "") {
//         toastr.error("Verificar cadastro do usuário no AD.","Empresa não informada!",{timeOut: 5000});
//         return;
//     }
//     if (filial.value == "") {
//         toastr.error("Verificar cadastro do usuário no AD.","Filial não informada!",{timeOut: 5000});
//         return;
//     }
//     if (email.value == "") {
//         toastr.error("Verificar cadastro do usuário no AD.","Email não informado!",{timeOut: 5000});
//         return;
//     }
//     if (tipoUsr.value == "") {
//         toastr.warning("Preencha o campo Tipo de Usuário.","Tipo de Usuário não informado!",{timeOut: 5000});
//         return;
//     }
//     if (menuUsr.value == "") {
//         toastr.warning("Preencha o campo Perfil do Usuário.","Perfil do Usuário não informado!",{timeOut: 5000});
//         return;
//     }
//     if (impressora.value == "") {
//         toastr.warning("Preencha o campo Impressora.","Impressora não informada!",{timeOut: 5000});
//         return;
//     }
//     if (dirServ.value == "") {
//         toastr.warning("Preencha o campo Diretório Servidor.","Diretório Servidor não informado!",{timeOut: 5000});
//         return;
//     }
//     if (dirRede.value == "") {
//         toastr.warning("Preencha o campo Diretório de Rede.","Diretório de Rede não informado!",{timeOut: 5000});
//         return;
//     }

//     $.confirm({
//         boxWidth: '30%',
//         useBootstrap: false,
//         type: 'dark',
//         title: 'Cadastrar!',
//         content: 'Tem certeza que deseja incluir estes dados no banco?',
//         buttons: {
//             Ok:{
//                 text: 'Sim (incluir)',
//                 action: function () {
//                     novoUsr.submit();
//                 }
//             },
//             Cancelar: {
//                 btnClass: 'btn-red',
//                 text: 'NÃO (Cancelar)',
//                 // action: function () {
//                 //     $.alert('You clicked on "Não"');
//                 // }
//             }
//         }
//     });
// }