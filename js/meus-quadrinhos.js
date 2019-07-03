// Tooltips

var tooltips = {
    "titulo": "O titulo representa o nome do quadrinho",
    "categoria": "A categoria do quadrinho define se ele é um TPB, ou seja, uma coleção ou se é um quadrinho de edição mensal. Passe o mouse sobre as opções para mais informações",
    "categoriaTPB": "TPB é uma coleção de quadrinhos reunidas em uma só encadernação. É uma historia completa",
    "categoriaMENSAL": "MENSAL quer dizer que esse quadrinho faz parte de uma publicação mensal, ou seja, tem um segmento de história",
    "pesoQuadrinho": "Neste campo você deve listar quantos GRAMAS pesam o seu quadrinho. Digite somente o numero sem informar a unidade",
    "editora": "Neste campo você deve selecionar qual a editora do seu quadrinho. Se não for Marvel ou DC, selecione OUTRAS",
    "numeroPaginas": "Aqui você deve listar o numero de páginas do seu quadrinho. Digite somente numeros",
    "tipoCapa": " Neste campo você entre o tipo de campa, entre HARD e SOFT, ou seja, capa DURA OU MOLE",
    "tipoCapaMole": "SOFT é o tipo de capa MOLE",
    "tipoCapaDura": "HARD é o tipo de capa DURA"
};

function carregarTooltip() {
    document.getElementById('tpTitulo').title = tooltips.titulo;
    document.getElementById('tpEditora').title = tooltips.editora;
    document.getElementById('tpCategoria').title = tooltips.categoria;
    document.getElementById('tpCategoriaTPB').title = tooltips.categoriaTPB;
    document.getElementById('tpCategoriaMENSAL').title = tooltips.categoriaMENSAL;
    document.getElementById('tpNPaginas').title = tooltips.numeroPaginas;
    document.getElementById('tpPeso').title = tooltips.pesoQuadrinho;
    document.getElementById('tpTipoCapa').title = tooltips.tipoCapa;
    document.getElementById('tpTipoCapaDura').title = tooltips.tipoCapaDura;
    document.getElementById('tpTipoCapaMole').title = tooltips.tipoCapaMole;
}

// -------------------------------------------------------------------------------------//

let validacaoTitulo = false;
let validacaoEditora = false;
let validacaoCategoria = false;
let validacaoNrPagina = false;
let validacaoPeso = false;
let validacaoTipoCapa = false;

function verifyInput(id) {
    let titulo = document.getElementById('títuloQuadrinho').value;
    let editora = document.getElementById('editora').value;
    let categoria = document.getElementById('categoria').value;
    let nrPagina = document.getElementById('numeroPags').value;
    let peso = document.getElementById('pesoQuadrinho').value;
    let tipoCapa = document.getElementById('tipoCapa').value;


    var regexTitle = validTitle(titulo);
    var regexPags = onlyNumber(nrPagina);
    var regexPeso = onlyNumber(peso);

    if (id == 'títuloQuadrinho') {
        if (!regexTitle) {
            document.getElementById('títuloQuadrinho').style.border = "3px solid red";
            document.getElementById('aviso-erro-titulo').classList.replace('d-none', 'd-block');
        } else {
            document.getElementById('títuloQuadrinho').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-titulo').classList.replace('d-block', 'd-none');
            validacaoTitulo = true;
        }

    } else if (id == 'editora') {
        if (editora == 'editora') {
            document.getElementById('editora').style.border = "3px solid red";
            document.getElementById('aviso-erro-editora').classList.replace('d-none', 'd-block');
        } else {
            document.getElementById('editora').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-editora').classList.replace('d-block', 'd-none');
            validacaoEditora = true;
        }
    } else if (id == 'categoria') {
        if (categoria == 'categoria') {
            document.getElementById('categoria').style.border = "3px solid red";
            document.getElementById('aviso-erro-categoria').classList.replace('d-none', 'd-block');
        } else {
            document.getElementById('categoria').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-categoria').classList.replace('d-block', 'd-none');
            validacaoCategoria = true;
        }
    } else if (id == 'numeroPags') {
        if (nrPagina <= 0 || !regexPags) {
            document.getElementById('numeroPags').style.border = "3px solid red";
            document.getElementById('aviso-erro-paginas').classList.replace('d-none', 'd-block');
        } else {
            document.getElementById('numeroPags').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-paginas').classList.replace('d-block', 'd-none');
            validacaoNrPagina = true;

        }
    } else if (id == 'pesoQuadrinho') {
        if (peso <= 0) {
            document.getElementById('pesoQuadrinho').style.border = "3px solid red";
            document.getElementById('aviso-erro-peso').classList.replace('d-none', 'd-block');
            document.getElementById('aviso-erro-peso').innerHTML = "Peso inválido!!"
        } else if (!regexPeso) {
            document.getElementById('pesoQuadrinho').style.border = "3px solid red";
            document.getElementById('aviso-erro-peso').classList.replace('d-none', 'd-block');
        } else {
            document.getElementById('pesoQuadrinho').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-peso').classList.replace('d-block', 'd-none');
            validacaoPeso = true;
        }
    } else if (id == 'tipoCapa') {
        if (tipoCapa == 'capa') {
            document.getElementById('tipoCapa').style.border = "3px solid red";
            document.getElementById('aviso-erro-capa').classList.replace('d-none', 'd-block');
        } else {
            document.getElementById('tipoCapa').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-capa').classList.replace('d-block', 'd-none');
            validacaoTipoCapa = true;
        }
    }
}

let validacaoTitulo2 = false;
let validacaoEditora2 = false;
let validacaoCategoria2 = false;
let validacaoNrPagina2 = false;
let validacaoPeso2 = false;
let validacaoTipoCapa2 = false;

function validForm() {
    let titulo = document.getElementById('títuloQuadrinho').value;
    let editora = document.getElementById('editora').value;
    let categoria = document.getElementById('categoria').value;
    let nrPagina = document.getElementById('numeroPags').value;
    let peso = document.getElementById('pesoQuadrinho').value;
    let tipoCapa = document.getElementById('tipoCapa').value;


    var regexTitle = validTitle(titulo);
    var regexPags = onlyNumber(nrPagina);
    var regexPeso = onlyNumber(peso);
    if (!regexTitle) {
        document.getElementById('títuloQuadrinho').focus();
        document.getElementById('títuloQuadrinho').style.border = "3px solid red";
        document.getElementById('aviso-erro-titulo').classList.replace('d-none', 'd-block');
    } else if (editora == 'editora') {
        document.getElementById('editora').focus();
        document.getElementById('editora').style.border = "3px solid red";
        document.getElementById('aviso-erro-editora').classList.replace('d-none', 'd-block');
    } else if (categoria == 'categoria') {
        document.getElementById('categoria').focus();
        document.getElementById('categoria').style.border = "3px solid red";
        document.getElementById('aviso-erro-categoria').classList.replace('d-none', 'd-block');
    } else if (nrPagina <= 0 || !regexPags) {
        document.getElementById('numeroPags').focus();
        document.getElementById('numeroPags').style.border = "3px solid red";
        document.getElementById('aviso-erro-paginas').classList.replace('d-none', 'd-block');
    } else if (peso <= 0 || !regexPeso) {
        document.getElementById('pesoQuadrinho').focus();
        document.getElementById('pesoQuadrinho').style.border = "3px solid red";
        document.getElementById('aviso-erro-peso').classList.replace('d-none', 'd-block');
        document.getElementById('aviso-erro-peso').innerHTML = "Peso inválido!!"
    } else if (tipoCapa == 'capa') {
        document.getElementById('tipoCapa').style.border = "3px solid red";
        document.getElementById('aviso-erro-capa').classList.replace('d-none', 'd-block');
    } else {
        if (window.confirm('Confirma a alteração de dados deste quadrinho?')) {
            atualizarDadosQuadrinho();
        }
    }
}

function atualizarDadosQuadrinho() {
    let titulo = document.getElementById('títuloQuadrinho').value;
    let editora = document.getElementById('editora').value;
    let categoria = document.getElementById('categoria').value;
    let nrPagina = document.getElementById('numeroPags').value;
    let peso = document.getElementById('pesoQuadrinho').value;
    // let tipoCapa = document.getElementById('tipoCapa').value;

    let idStatusProduct = document.getElementById('idProductStatus').value;
    let idProduct = document.getElementById('idProduct').value;




    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/update-product",
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
        },
        "data": {
            "publishingCompany": editora,
            "title": titulo,
            "format": categoria,
            "pagesNumber": nrPagina,
            "weight": peso,
            "statusID": idStatusProduct,
            "productID": idProduct
        },
        "xhrFields": {
            "withCredentials": true
        }
    }

    $.ajax(settings)
        .done(function (response) {
            alertSuccess(response)
        })
        .fail(function (response) {
            showResponse()
        });
}

function showResponse() {
    alert("Ocorreu um erro ao atualizar os dados deste quadrinho!!")
}

function alertSuccess(response) {
    document.getElementById('btnFechaModalDadosQuadrinho').click();
    alert("Quadrinho atualizado com sucesso!!")
    window.location.reload();

}

function validTitle(palavra) {
    const filter_nome = /[a-zA-Zá-úà-ùÀ-Ù0-9]{1,}\w{0,}$/;

    if (!filter_nome.test(palavra)) {
        return false;
    }
    if (filter_nome.test(palavra)) {
        return true;
    }

}

function onlyNumber(value) {
    const filter_number = /[0-9]$/
    if (!filter_number.test(value)) {
        return false;
    }
    if (filter_number.test(value)) {
        return true;
    }
}




// Funcoes do modal de ativar leilao
var validacaoDataInput = false;
var validacaoDuracaoLeilao = false;
var validacaoValorInicial = false;
var validacaoLancePadrao = false;

function ehIgual(diaAtual, formatDataInput) {

    if (diaAtual == formatDataInput) {
        return true;
    } else {
        return false
    }
}

function verifyInputModalLeilao(id) {
    var dataInput = document.getElementById('dt-inicio').value;
    var duracaoLeilao = document.getElementById('duracao').value;
    var valorInicial = document.getElementById('vlr-inicial').value;
    var lancePadrao = document.getElementById('lancePadrao').value;

    var now = moment();
    var dataInicio = moment(dataInput);
    dataInicio.startOf("date");
    now.startOf("date");

    var validData = moment(dataInicio).isBefore(now);
    var validDuracao = onlyNumber(duracaoLeilao);
    var diaAtual = now.get("date") + '-' + (now.get("month") + 1) + '-' + now.get("year");

    var formatDataInput = dataInicio.get("date") + '-' + (dataInicio.get("month") + 1) + '-' + dataInicio.get("year");

    var inicioEhHoje = ehIgual(diaAtual, formatDataInput);


    if (id == 'dt-inicio') {
        if (dataInput == '' | validData) {
            document.getElementById('dt-inicio').style.border = "3px solid red";
            document.getElementById('aviso-erro-data').classList.replace('d-none', 'd-block');
            document.getElementById('aviso-erro-data').innerHTML = "Informe a data de inicio do leilão!!"
        } else if (!validData || inicioEhHoje) {
            document.getElementById('dt-inicio').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-data').classList.replace('d-block', 'd-none');
            validacaoDataInput = true;
        }

    } else if (id == 'duracao') {
        if (!validDuracao) {
            document.getElementById('duracao').style.border = "3px solid red";
            document.getElementById('aviso-erro-duracao').classList.replace('d-none', 'd-block');

        } else {
            document.getElementById('duracao').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-duracao').classList.replace('d-block', 'd-none');
            validacaoDuracaoLeilao = true;
        }
    } else if (id == 'vlr-inicial') {
        if (valorInicial == '') {
            document.getElementById('vlr-inicial').style.border = "3px solid red";
            document.getElementById('aviso-erro-vlrInicial').classList.replace('d-none', 'd-block');
        } else {
            document.getElementById('vlr-inicial').style.border = "3px solid lightgrenn";
            document.getElementById('aviso-erro-vlrInicial').classList.replace('d-block', 'd-none');
            validacaoValorInicial = true;
        }
    } else if (id == 'lancePadrao') {
        if (lancePadrao == '') {
            document.getElementById('lancePadrao').style.border = "3px solid red";
            document.getElementById('aviso-erro-lancePadrao').classList.replace('d-none', 'd-block');
        } else {
            document.getElementById('lancePadrao').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-lancePadrao').classList.replace('d-block', 'd-none');
            validacaoLancePadrao = true;
        }
    }
}


function validFormII() {
    if (!validacaoDataInput) {
        document.getElementById('dt-inicio').style.border = "3px solid red";
        document.getElementById('aviso-erro-data').classList.replace('d-none', 'd-block');
    } else if (!validacaoDuracaoLeilao) {
        document.getElementById('duracao').style.border = "3px solid red";
        document.getElementById('aviso-erro-duracao').classList.replace('d-none', 'd-block');
    } else if (!validacaoValorInicial) {
        document.getElementById('vlr-inicial').style.border = "3px solid lightgrenn";
        document.getElementById('aviso-erro-vlrInicial').classList.replace('d-block', 'd-none');
    } else if (!validacaoLancePadrao) {
        document.getElementById('lancePadrao').style.border = "3px solid red";
        document.getElementById('aviso-erro-lancePadrao').classList.replace('d-none', 'd-block');
    } else {
        if (window.confirm('Confirma a ativação deste leilão')) {
            enviarDadosLeilao();
        }
    }
}

function enviarDadosLeilao() {
    var dataInput = document.getElementById('dt-inicio').value;
    var duracaoLeilao = document.getElementById('duracao').value;
    var valorInicial = document.getElementById('vlr-inicial').value;
    var lancePadrao = document.getElementById('lancePadrao').value;
    var idProduct = document.getElementById('idProduct').value;
    var initialValueFormatted = GetFormattedValue(valorInicial);
    var baseBidFormatted = GetFormattedValue(lancePadrao);

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/insert-new-auction",
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
        },
        "data": {
            "productID": idProduct,
            "duration": duracaoLeilao,
            "initialDate": GetFormattedDate(),
            "initialValue": initialValueFormatted,
            "baseBid": baseBidFormatted
        },
        "xhrFields": {
            "withCredentials": true
        }
    }

    $.ajax(settings)
        .done(function (response) {
            alertSuccessAtivacao(response);
            window.location.reload()
        })
        .fail(function (response) {
            showResponseAtivacao()
        });
}

function showResponseAtivacao() {
    alert("Ocorreu um erro ao ativar o leilão!!")
}

function alertSuccessAtivacao(response) {
    document.getElementById('btnFechaModalAtivaLeilao').click();
    alert("Leilão cadastrado!!")
    window.location.reload();
}

function GetFormattedDate() {
    var dataInput = document.getElementById('dt-inicio').value;
    var partes = dataInput.split("-");
    let ano = partes[0];
    let mes = partes[1];
    let dia = partes[2];

    let dateFormatted = dia + '/' + mes + '/' + ano;

    return dateFormatted;

}

function GetFormattedValue(valor) {
    return valor.replace(',', '.');
}

function ChangeStatusToActive() {
    var idProduct = document.getElementById('idProduct').value;
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/change-product-status",
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
        },
        "data": {
            "productID": idProduct,
            "productStateID": "1"
        },
        "xhrFields": {
            "withCredentials": true
        }
    }

    if (window.confirm("Deseja alterar o status deste produto para Ativo?")) {
        $.ajax(settings)
            .done(function (response) {
                alert("Status alterado com sucesso!!")
                window.location.reload();
            })
            .fail(function (response) {
                alert('Ocorreu um erro ao alterar o status deste produto!!')
            });
    }



}

function mostraFormEditarLeilao(){
    document.getElementById('gerenciarLeilao').classList.replace('d-none','d-block');
}

function mostraAvisoProdutoEmLeilao(){
    alert('Não é possível alterar dados de quadrinhos que estejam em leilão!!')
}

function cancelarLeilao(){
    var idLeilao =document.getElementById('idLeilao').value;

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/delete-auction-by-id",
            "method": "POST",
            "headers": {
              "Content-Type": "application/x-www-form-urlencoded",
              "cache-control": "no-cache",
            },
            "data": {
            "auctionID": idLeilao
            }, 
            "xhrFields": {
                "withCredentials": true
            }
          }
          if(window.confirm("Confirmar cancelamento deste leilão?")){

          $.ajax(settings).done(function (response) {
              alert("Leilão cancelado com sucesso!")
              window.location.reload()
          });
    }
}