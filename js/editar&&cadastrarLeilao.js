var validacaoDataInputCriarLeilao = false;
var validacaoDuracaoLeilaoCriarLeilao = false;
var validacaoValorInicialCriarLeilao = false;
var validacaoLancePadraoCriarLeilao = false;

function verifyInputModalCriarLeilao(id){
    var dataInputCriarLeilao = document.getElementById('dt-inicio').value;
    var duracaoLeilaoCriarLeilao = document.getElementById('duracao').value;
    var valorInicialCriarLeilao = document.getElementById('vlr-inicial').value;
    var lancePadraoCriarLeilao = document.getElementById('lancePadrao').value;

    var now = moment();
    var dataInicio = moment(dataInputCriarLeilao);
    dataInicio.startOf("date");
    now.startOf("date");

    var validData = moment(dataInicio).isBefore(now);
    var validDuracao = onlyNumber(duracaoLeilaoCriarLeilao);
    var diaAtual = now.get("date") + '-' + (now.get("month") + 1) + '-' + now.get("year");

    var formatDataInput = dataInicio.get("date") + '-' + (dataInicio.get("month") + 1) + '-' + dataInicio.get("year");

    var inicioEhHoje = ehIgual(diaAtual, formatDataInput);


    if (id == 'dt-inicio') {
        if (dataInputCriarLeilao == '' | validData) {
            document.getElementById('dt-inicio').style.border = "3px solid red";
            document.getElementById('aviso-erro-data').classList.replace('d-none', 'd-block');
            document.getElementById('aviso-erro-data').innerHTML = "Informe a data de inicio do leilão!!"

        } else if (!validData || inicioEhHoje) {
            document.getElementById('dt-inicio').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-data').classList.replace('d-block', 'd-none');
            validacaoDataInputCriarLeilao = true;
        }

    } else if (id == 'duracao') {
        if (!validDuracao) {
            document.getElementById('duracao').style.border = "3px solid red";
            document.getElementById('aviso-erro-duracao').classList.replace('d-none', 'd-block');
        } else {
            document.getElementById('duracao').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-duracao').classList.replace('d-block', 'd-none');
            validacaoDuracaoLeilaoCriarLeilao = true;
        }
    } else if (id == 'vlr-inicial') {
        if (valorInicialCriarLeilao == '') {
            document.getElementById('vlr-inicial').style.border = "3px solid red";
            document.getElementById('aviso-erro-vlrInicial').classList.replace('d-none', 'd-block');
        } else {
            document.getElementById('vlr-inicial').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-vlrInicial').classList.replace('d-block', 'd-none');
            validacaoValorInicialCriarLeilao = true;
        }
    } else if (id == 'lancePadrao') {
        if (lancePadraoCriarLeilao == '') {
            document.getElementById('lancePadrao').style.border = "3px solid red";
            document.getElementById('aviso-erro-lancePadrao').classList.replace('d-none', 'd-block');
        } else {
            document.getElementById('lancePadrao').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-lancePadrao').classList.replace('d-block', 'd-none');
            validacaoLancePadraoCriarLeilao = true;
        }
    }
}

function ehIgual(diaAtual, formatDataInput) {

    if (diaAtual == formatDataInput) {
        return true;
    } else {
        return false
    }
}
// Funcoes do modal de ativar leilao
var validacaoDataInput = false;
var validacaoDuracaoLeilao = false;
var validacaoValorInicial = false;
var validacaoLancePadrao = false;
function verifyInputModalLeilao(id) {
    var dataInput = document.getElementById('dt-inicio-editar-leilao').value;
    var duracaoLeilao = document.getElementById('duracao-editar-leilao').value;
    var valorInicial = document.getElementById('vlr-inicial-editar-leilao').value;
    var lancePadrao = document.getElementById('lancePadrao-editar-leilao').value;

    var now = moment();
    var dataInicio = moment(dataInput);
    dataInicio.startOf("date");
    now.startOf("date");

    var validData = moment(dataInicio).isBefore(now);
    var validDuracao = onlyNumber(duracaoLeilao);
    var diaAtual = now.get("date") + '-' + (now.get("month") + 1) + '-' + now.get("year");

    var formatDataInput = dataInicio.get("date") + '-' + (dataInicio.get("month") + 1) + '-' + dataInicio.get("year");

    var inicioEhHoje = ehIgual(diaAtual, formatDataInput);


    if (id == 'dt-inicio-editar-leilao') {
        if (dataInput == '' | validData) {
            document.getElementById('dt-inicio-editar-leilao').style.border = "3px solid red";
            document.getElementById('aviso-erro-data').classList.replace('d-none', 'd-block');
            document.getElementById('aviso-erro-data').innerHTML = "Informe a data de inicio do leilão!!"

        } else if (!validData || inicioEhHoje) {
            document.getElementById('dt-inicio-editar-leilao').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-data').classList.replace('d-block', 'd-none');
            console.log(dataInput)
            validacaoDataInput = true;
        }

    } else if (id == 'duracao-editar-leilao') {
        if (!validDuracao) {
            document.getElementById('duracao-editar-leilao').style.border = "3px solid red";
            document.getElementById('aviso-erro-duracao').classList.replace('d-none', 'd-block');

        } else {
            document.getElementById('duracao-editar-leilao').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-duracao').classList.replace('d-block', 'd-none');
            validacaoDuracaoLeilao = true;
        }
    } else if (id == 'vlr-inicial-editar-leilao') {
        if (valorInicial == '') {
            document.getElementById('vlr-inicial-editar-leilao').style.border = "3px solid red";
            document.getElementById('aviso-erro-vlrInicial').classList.replace('d-none', 'd-block');
        } else {
            document.getElementById('vlr-inicial-editar-leilao').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-vlrInicial').classList.replace('d-block', 'd-none');
            validacaoValorInicial = true;
        }
    } else if (id == 'lancePadrao-editar-leilao') {
        if (lancePadrao == '') {
            document.getElementById('lancePadrao-editar-leilao').style.border = "3px solid red";
            document.getElementById('aviso-erro-lancePadrao').classList.replace('d-none', 'd-block');
        } else {
            document.getElementById('lancePadrao-editar-leilao').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-lancePadrao').classList.replace('d-block', 'd-none');
            validacaoLancePadrao = true;
        }
    }
}

function validFormCriarLeilao(){
    var dataInputCriarLeilao = document.getElementById('dt-inicio').value;
    var duracaoLeilaoCriarLeilao = document.getElementById('duracao').value;
     var valorInicialCriarLeilao = document.getElementById('vlr-inicial').value;
     var lancePadraoCriarLeilao = document.getElementById('lancePadrao').value;


    var now = moment();
    var dataInicio = moment(dataInputCriarLeilao);
    dataInicio.startOf("date");
    now.startOf("date");

    var validData = moment(dataInicio).isBefore(now);
    var validDuracao = onlyNumber(duracaoLeilaoCriarLeilao);
    var diaAtual = now.get("date") + '-' + (now.get("month") + 1) + '-' + now.get("year");

    var formatDataInput = dataInicio.get("date") + '-' + (dataInicio.get("month") + 1) + '-' + dataInicio.get("year");

    var inicioEhHoje = ehIgual(diaAtual, formatDataInput);
    if (dataInputCriarLeilao == '' | validData) {
        document.getElementById('dt-inicio').style.border = "3px solid red";
        document.getElementById('aviso-erro-data').classList.replace('d-none', 'd-block');
        document.getElementById('aviso-erro-data').innerHTML = "Informe a data de inicio do leilão!!"

    } else if (!validDuracao) {
        document.getElementById('duracao').style.border = "3px solid red";
        document.getElementById('aviso-erro-duracao').classList.replace('d-none', 'd-block');
    } else if (valorInicialCriarLeilao == '') {
        document.getElementById('vlr-inicial').style.border = "3px solid red";
        document.getElementById('aviso-erro-vlrInicial').classList.replace('d-none', 'd-block');
    } else if (lancePadraoCriarLeilao == '') {
        document.getElementById('lancePadrao').style.border = "3px solid red";
        document.getElementById('aviso-erro-lancePadrao').classList.replace('d-none', 'd-block');
    } else {
        confirmAtivacaoLeilao();
        }
}

function validFormEditarLeilao() {
    var dataInput = document.getElementById('dt-inicio-editar-leilao').value;
    var duracaoLeilao = document.getElementById('duracao-editar-leilao').value;
     var valorInicial = document.getElementById('vlr-inicial-editar-leilao').value;
     var lancePadrao = document.getElementById('lancePadrao-editar-leilao').value;


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
        document.getElementById('dt-inicio-editar-leilao').style.border = "3px solid red";
        document.getElementById('aviso-erro-data').classList.replace('d-none', 'd-block');
        document.getElementById('aviso-erro-data').innerHTML = "Informe a data de inicio do leilão!!"

    } else if (!validDuracao) {
        document.getElementById('duracao-editar-leilao').style.border = "3px solid red";
        document.getElementById('aviso-erro-duracao').classList.replace('d-none', 'd-block');
    } else if (valorInicial == '') {
        document.getElementById('vlr-inicial-editar-leilao').style.border = "3px solid red";
        document.getElementById('aviso-erro-vlrInicial').classList.replace('d-none', 'd-block');
    } else if (lancePadrao == '') {
        document.getElementById('lancePadrao-editar-leilao').style.border = "3px solid red";
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

    var formdata = new FormData();

    formdata.append('productID', idProduct);
    formdata.append('duration', duracaoLeilao);
    formdata.append('initialDate',GetFormattedDate(dataInput));
    formdata.append('initialValue', initialValueFormatted);
    formdata.append('baseBid', baseBidFormatted);

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/insert-new-auction",
        "method": "POST",
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
            alertSuccessAtivacao(response);
        })
        .fail(function (response) {
            erroAtivaçãoLeilao()
        });
}

function enviarDadosAtualizarLeilao() {
    let dataInicioLeilao = GetFormattedDate(document.getElementById('dt-inicio-editar-leilao').value);
    let initialValue = document.getElementById('vlr-inicial-editar-leilao').value;
    let baseBid = document.getElementById('lancePadrao-editar-leilao').value;
    let duracao = document.getElementById('duracao-editar-leilao').value;
    let auctionStatusID = document.getElementById('idStatusAuction').value;
    let productID = document.getElementById('idProduct').value;
    let auctionID = document.getElementById('idLeilao').value;
    var initialValueFormatted = GetFormattedValue(initialValue);
    var baseBidFormatted = GetFormattedValue(baseBid);
    var formdata = new FormData();

    formdata.append('productID', productID);
    formdata.append('duration', duracao);
    formdata.append('initialDate',dataInicioLeilao);
    formdata.append('initialValue', initialValueFormatted);
    formdata.append('baseBid', baseBidFormatted);
    formdata.append('auctionStatusID',auctionStatusID);
    formdata.append('auctionID',auctionID)
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/update-auction",
        "method": "POST",
        "cache": false,
        "processData": false,
        "contentType": false,
        "data": formdata,
        "xhrFields": {
            "withCredentials": true
        }
    }
    console.log(settings)
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

function limpaValues(){
    document.getElementById('idLeilao').value = null;
    document.getElementById('idProduct').value = null;
    document.getElementById('dataLeilao').value = null;
    document.getElementById('idProduct').value = null;
    document.getElementById('statusAuction').value = null;
    document.getElementById('idStatusAuction').value = null;
    document.getElementById('initialValue').value = null;
    document.getElementById('currentValue').value = null;
    document.getElementById('dt-inicio-editar-leilao').value = null;
    document.getElementById('duracao-editar-leilao').value = null;
    document.getElementById('vlr-inicial-editar-leilao').value = null;
    document.getElementById('lancePadrao-editar-leilao').value =null;


}
