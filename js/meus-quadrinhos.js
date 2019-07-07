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
    } else {
        confirmAtualizacaoProduto();
    }
}

function atualizarDadosQuadrinho() {
    var updateImage;
    var formdata = new FormData();

    if (document.getElementById('imagem').value != document.getElementById('cpQuadrinho').value && document.getElementById('cpQuadrinho').value != '') {
        updateImage = true;
    } else {
        updateImage = false;
    }

    formdata.append('publishingCompany', document.getElementById('editora').value);
    formdata.append('title', document.getElementById('títuloQuadrinho').value);
    formdata.append('format', document.getElementById('categoria').value);
    formdata.append('pagesNumber', document.getElementById('numeroPags').value);
    formdata.append('weight', document.getElementById('pesoQuadrinho').value);
    formdata.append('file', document.getElementById('cpQuadrinho').files[0]);
    formdata.append('updateImage', updateImage);
    formdata.append('productID', document.getElementById('idProduct').value)
    formdata.append('statusID', document.getElementById('idProductStatus').value);
    $('#modalCarregando').modal('show');
    $('#modalDadosQuadrinho').modal('hide');



    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/update-product",
        "method": "POST",
        "cache": false,
        "processData": false,
        "contentType": false,
        "data": formdata,
        "xhrFields": {
            "withCredentials": true
        }
    }

    $.ajax(settings)
        .done(function (response) {
            $('#modalCarregando').modal('hide');

            produtoAtualizadoSucesso();

        })
        .fail(function (response) {
            erroAtualizaçãoProduto();
        });
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
            console.log(dataInput)
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
    if (dataInput == '' | validData) {
        document.getElementById('dt-inicio').style.border = "3px solid red";
        document.getElementById('aviso-erro-data').classList.replace('d-none', 'd-block');
        document.getElementById('aviso-erro-data').innerHTML = "Informe a data de inicio do leilão!!"

    } else if (!validDuracao) {
        document.getElementById('duracao').style.border = "3px solid red";
        document.getElementById('aviso-erro-duracao').classList.replace('d-none', 'd-block');
    } else if (valorInicial == '') {
        document.getElementById('vlr-inicial').style.border = "3px solid red";
        document.getElementById('aviso-erro-vlrInicial').classList.replace('d-none', 'd-block');
    } else if (lancePadrao == '') {
        document.getElementById('lancePadrao').style.border = "3px solid red";
        document.getElementById('aviso-erro-lancePadrao').classList.replace('d-none', 'd-block');
    } else {
        confirmAtivacaoLeilao();
    }
}
function validFormIII() {
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
    if (dataInput == '' | validData) {
        document.getElementById('dt-inicio').style.border = "3px solid red";
        document.getElementById('aviso-erro-data').classList.replace('d-none', 'd-block');
        document.getElementById('aviso-erro-data').innerHTML = "Informe a data de inicio do leilão!!"

    } else if (!validDuracao) {
        document.getElementById('duracao').style.border = "3px solid red";
        document.getElementById('aviso-erro-duracao').classList.replace('d-none', 'd-block');
    } else if (valorInicial == '') {
        document.getElementById('vlr-inicial').style.border = "3px solid red";
        document.getElementById('aviso-erro-vlrInicial').classList.replace('d-none', 'd-block');
    } else if (lancePadrao == '') {
        document.getElementById('lancePadrao').style.border = "3px solid red";
        document.getElementById('aviso-erro-lancePadrao').classList.replace('d-none', 'd-block');
    } else {
        confirmarAtualizacaoLeilao();
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
            "initialDate": GetFormattedDate(dataInput),
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
        })
        .fail(function (response) {
            erroAtivaçãoLeilao()
        });
}

function enviarDadosAtualizarLeilao() {
    let dataInicioLeilao = document.getElementById('dt-inicio').value;
    let initialValue = document.getElementById('vlr-inicial').value;
    let baseBid = document.getElementById('lancePadrao').value;
    let duracao = document.getElementById('duracao').value;
    let auctionStatusID = document.getElementById('idStatusAuction').value;
    let productID = document.getElementById('idProduct').value;
    let auctionID = document.getElementById('idLeilao').value;
    var initialValueFormatted = GetFormattedValue(initialValue);
    var baseBidFormatted = GetFormattedValue(baseBid);

    alert(productID + ' ' + auctionID);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/update-auction",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
        },
        "data": {
            "productID": productID,
            "duration": duracao,
            "initialDate": GetFormattedDate(dataInicioLeilao),
            "initialValue": initialValueFormatted,
            "baseBid": baseBidFormatted,
            "auctionStatusID": auctionStatusID,
            "auctionID": auctionID
        },    "xhrFields": {
            "withCredentials": true
        }
    }
        $.ajax(settings).done(function (response) {
            console.log(response)
            $('#modalCarregando').modal('hide');
            leilaoAtualizadoSucesso();
        });
}

function alertSuccessAtivacao(response) {
    $('#modalCadastrandoLeilao').modal('hide');
    $('#modalLeilao').modal('hide');
    AtivaçãoLeilao();
}

function GetFormattedDate(valor) {
    var partes = valor.split("-");
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

    $.ajax(settings)
        .done(function (response) {
            statusAlteradStatusProdutoSuccesso();
        })
        .fail(function (response) {
            statusAlteradStatusProdutoErro();
        });




}

function mostraFormEditarLeilao() {
    document.getElementById('changeStatusAuction').classList.replace('d-block', 'd-none');
    document.getElementById('gerenciarLeilao').classList.replace('d-none', 'd-block');
    document.getElementById('dadosLeilao').classList.replace('d-block', 'd-none');
}

function mostraDadosLeilao() {
    document.getElementById('changeStatusAuction').classList.replace('d-block', 'd-none');
    document.getElementById('gerenciarLeilao').classList.replace('d-block', 'd-none');
    document.getElementById('dadosLeilao').classList.replace('d-none', 'd-block');
}

function mostraAvisoProdutoEmLeilao() {
    avisoProdutoEmLeilao();
}

function cancelarLeilao() {
    var idLeilao = document.getElementById('idLeilao').value;

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

    $.ajax(settings).done(function (response) {
        console.log(response.data)
        if (response.data == 'You cannot delete an auction with bids') {
            alertCancelarLeilaoComLances();
        } else {
            alertLeilaoCanceladoSucesso();
        }
    });

}

function deleteProduct() {
    var idProduct = document.getElementById('idProduct').value;


    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/delete-product",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
        },
        "data": {
            "productID": idProduct
        },
        "xhrFields": {
            "withCredentials": true
        }
    }

    $.ajax(settings).done(function (response) {
            sucessoInativarProduto();
        })
        .fail(function (response) {
            erroInativarProduto();
        });
}


function formatDate(timestamp) {
    var date = new Date(timestamp);

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    return year + "-" + month + "-" + day;
}

function changeStatusAuction() {
    document.getElementById('changeStatusAuction').classList.replace('d-none', 'd-block');
    document.getElementById('gerenciarLeilao').classList.replace('d-block', 'd-none');
    document.getElementById('dadosLeilao').classList.replace('d-block', 'd-none');

    let idAuction = document.getElementById('idLeilao').value;
    let statusAuction = document.getElementById('statusAuction').value;
    let idStatusAuction = document.getElementById('idStatusAuction').value;
    document.getElementById('statusProduto').innerHTML = "Status do leilão: " + document.getElementById('statusAuction').value;

    if (statusAuction == 'ATIVO') {
        document.getElementById('btnChangeToHold').classList.replace('d-none', 'd-block');
        document.getElementById('btnChangeToInactive').classList.replace('d-none', 'd-block');
    } else if (statusAuction == 'INATIVO') {
        document.getElementById('btnChangeToHold').classList.replace('d-none', 'd-block');
        document.getElementById('btnChangeToActive').classList.replace('d-none', 'd-block');
    } else if (statusAuction == 'EM_ESPERA') {
        document.getElementById('btnChangeToInactive').classList.replace('d-none', 'd-block');
        document.getElementById('btnChangeToActive').classList.replace('d-none', 'd-block');
    }

}

function changeStatusAuctionToOnHold() {
    let idAuction = document.getElementById('idLeilao').value;

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/change-auction-status",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
        },
        "data": {
            "auctionID": idAuction,
            "auctionStatusID": "3"
        },
        "xhrFields": {
            "withCredentials": true
        }
    }
    $.ajax(settings).done(function (response) {
            alteracaoStatusLeilaoSucesso()
        })
        .fail(function (response) {
            alteracaoStatusLeilaoErro();
        });

}


function changeStatusAuctionToActive() {
    let idAuction = document.getElementById('idLeilao').value;
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/change-auction-status",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
        },
        "data": {
            "auctionID": idAuction,
            "auctionStatusID": "1"
        },
        "xhrFields": {
            "withCredentials": true
        }
    }
    $.ajax(settings).done(function (response) {
            alteracaoStatusLeilaoSucesso()
        })
        .fail(function (response) {
            alteracaoStatusLeilaoErro();
        });

}

function changeStatusAuctionToInactive() {
    let idAuction = document.getElementById('idLeilao').value;
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/change-auction-status",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
        },
        "data": {
            "auctionID": idAuction,
            "auctionStatusID": "2"
        },
        "xhrFields": {
            "withCredentials": true
        }
    }
    $.ajax(settings).done(function (response) {
            alteracaoStatusLeilaoSucesso()
        })
        .fail(function (response) {
            alteracaoStatusLeilaoErro();
        });

}


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#previewQuadrinho')
                .attr('src', e.target.result)
        };
        reader.readAsDataURL(input.files[0]);
    }
}


function clickInputFile() {
    document.getElementById('cpQuadrinho').click();
}