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
let validacaoTipoCapa = true;
let validacaoCapa = false;

function verifyInput(id) {
    let titulo = document.getElementById('títuloQuadrinho').value;
    let editora = document.getElementById('editora').value;
    let categoria = document.getElementById('categoria').value;
    let nrPagina = document.getElementById('numeroPags').value;
    let peso = document.getElementById('pesoQuadrinho').value;
//    let tipoCapa = document.getElementById('tipoCapa').value;
    let cpQuadrinho = document.getElementById('cpQuadrinho').value;

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
        if (peso <= 0 || !regexPeso) {
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

function validForm() {
    let cpQuadrinho = document.getElementById('cpQuadrinho').value;

    if (!validacaoTitulo) {
        document.getElementById('títuloQuadrinho').style.border = "3px solid red";
        document.getElementById('aviso-erro-titulo').classList.replace('d-none', 'd-block');
    } else if (!validacaoEditora) {
        document.getElementById('editora').style.border = "3px solid red";
        document.getElementById('aviso-erro-editora').classList.replace('d-none', 'd-block');
    } else if (!validacaoCategoria) {
        document.getElementById('categoria').style.border = "3px solid red";
        document.getElementById('aviso-erro-categoria').classList.replace('d-none', 'd-block');
    } else if (!validacaoNrPagina) {
        document.getElementById('numeroPags').style.border = "3px solid red";
        document.getElementById('aviso-erro-paginas').classList.replace('d-none', 'd-block');
    } else if (!validacaoPeso) {
        document.getElementById('pesoQuadrinho').style.border = "3px solid red";
        document.getElementById('aviso-erro-peso').classList.replace('d-none', 'd-block');
    } else if (!validacaoTipoCapa) {
//        document.getElementById('tipoCapa').style.border = "3px solid red";
//        document.getElementById('aviso-erro-capa').classList.replace('d-none', 'd-block');
    } else {
        enviarDadosQuadrinho();
    }

    // else if(cpQuadrinho == ''){
    //     document.getElementById('aviso-erro-capaQuadrinho').classList.replace('d-none', 'd-block');
    //     document.getElementById('previewQuadrinho').style.border = "5px solid red";
    // }

}

function showAlertify() {
    alertify.success("Quadrinho cadastrado com sucesso!!");

}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#previewQuadrinho')
                .attr('src', e.target.result)
                .width(250)
                .height(300);
        };
        reader.readAsDataURL(input.files[0]);
    }
}


function clickInputFile() {
    document.getElementById('cpQuadrinho').click();
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

function enviarDadosQuadrinho() {

    var formdata = new FormData();
    formdata.append('publishingCompany', document.getElementById('editora').value);
    formdata.append('title', document.getElementById('títuloQuadrinho').value);
    formdata.append('format', document.getElementById('categoria').value);
    formdata.append('pagesNumber', document.getElementById('numeroPags').value);
    formdata.append('weight', document.getElementById('pesoQuadrinho').value);
    formdata.append('file', document.getElementById('cpQuadrinho').files[0]);
    
    // let titulo = document.getElementById('títuloQuadrinho').value;
    // let editora = document.getElementById('editora').value;
    // let categoria = document.getElementById('categoria').value;
    // let nrPagina = document.getElementById('numeroPags').value;
    // let peso = document.getElementById('pesoQuadrinho').value;
    // // let tipoCapa = document.getElementById('tipoCapa').value;
    // let file = document.getElementById('cpQuadrinho').files[0];

//    console.log(titulo + ' ' + editora + ' ' + categoria + ' ' + nrPagina + ' ' + ' ' + peso);

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/insert-product",
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
            alert('Quadrinho cadastrado com sucesso!');
            window.location.reload();
        })
        .fail(function (response) {
            alert('Ocorreu um erro ao cadastrar o quadrinho!')
        });
}