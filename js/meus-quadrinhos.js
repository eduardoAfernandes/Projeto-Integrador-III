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


function validForm() {
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
        document.getElementById('tipoCapa').style.border = "3px solid red";
        document.getElementById('aviso-erro-capa').classList.replace('d-none', 'd-block');
    }
}

function validTitle(palavra) {
    const filter_nome = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;

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




// Validacoes no modal de ativar leilao
var validacaoDataInput = false;
var validacaoDuracaoLeilao = false;
var validacaoValorInicial = false;
var validacaoLancePadrao = false;

function verifyInputModalLeilao(id) {
    var dataInput = document.getElementById('dt-inicio').value;
    var duracaoLeilao = document.getElementById('duracao').value;
    var valorInicial = document.getElementById('vlr-inicial').value;
    var lancePadrao = document.getElementById('lancePadrao').value;

    const now = moment();
    dataInicio = moment(dataInput);
    var validData = moment(dataInicio).isBefore(now);
    var validDuracao = onlyNumber(duracaoLeilao);


    if (id == 'dt-inicio') {
        if (dataInput == '') {
            document.getElementById('dt-inicio').style.border = "3px solid red";
            document.getElementById('aviso-erro-data').classList.replace('d-none', 'd-block');
            document.getElementById('aviso-erro-data').innerHTML = "Informe a data de inicio do leilão!!"
        } else if (!validData || (dataInicio.get("date") == now.get("date") && (dataInicio.get("month") + 1) == (now.get("month") + 1) && dataInicio.get("year") == now.get("year"))) {
            document.getElementById('dt-inicio').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-data').classList.replace('d-block', 'd-none');
            validacaoDataInput = true;
        }

    }else if (id == 'duracao'){
        if(!validDuracao){
            document.getElementById('duracao').style.border = "3px solid red";
            document.getElementById('aviso-erro-duracao').classList.replace('d-none', 'd-block');

        }else{
            document.getElementById('duracao').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-duracao').classList.replace('d-block', 'd-none');
            validacaoDuracaoLeilao = true;
        }
    }else if(id == 'vlr-inicial'){
        if(valorInicial == ''){
            document.getElementById('vlr-inicial').style.border = "3px solid red";
            document.getElementById('aviso-erro-vlrInicial').classList.replace('d-none','d-block');
        }else{
            document.getElementById('vlr-inicial').style.border = "3px solid lightgrenn";
            document.getElementById('aviso-erro-vlrInicial').classList.replace('d-block','d-none');
            validacaoValorInicial = true;
        }
    }else if(id == 'lancePadrao'){
        if(lancePadrao == ''){
            document.getElementById('lancePadrao').style.border = "3px solid red";
            document.getElementById('aviso-erro-lancePadrao').classList.replace('d-none','d-block');
        }else{
            document.getElementById('lancePadrao').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-lancePadrao').classList.replace('d-block','d-none');
            validacaoLancePadrao = true;
        }
    }
}


function validFormII(){
    if (!validacaoDataInput) {
        document.getElementById('dt-inicio').style.border = "3px solid red";
        document.getElementById('aviso-erro-data').classList.replace('d-none', 'd-block');
    }else if (!validacaoDuracaoLeilao){
        document.getElementById('duracao').style.border = "3px solid red";
        document.getElementById('aviso-erro-duracao').classList.replace('d-none', 'd-block');
    }else if(!validacaoValorInicial){
        document.getElementById('vlr-inicial').style.border = "3px solid lightgrenn";
        document.getElementById('aviso-erro-vlrInicial').classList.replace('d-block','d-none');
    }else if(!validacaoLancePadrao){
        document.getElementById('lancePadrao').style.border = "3px solid red";
        document.getElementById('aviso-erro-lancePadrao').classList.replace('d-none','d-block');
    }
}