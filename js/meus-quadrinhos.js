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




