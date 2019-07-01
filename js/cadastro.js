let validacaoNome = false;
let validacaoEmail = false;
let validacaoCidade = false;
let validacaoEstado = false;
let validacaoPassword = false;
let validacaoConfPassword = false;
let validacaoDtNascimento = false;




function validaCampo(id) {
    let nome = document.getElementById('nomeUser').value.trim();
    let email = document.getElementById('email').value.trim();
    let cidade = document.getElementById('selectCidade').value;
    let estado = document.getElementById('selectEstado').value;
    let password = document.getElementById('userPwd').value.trim();
    let confPassword = document.getElementById('confSenha').value.trim();
    let dtNascimento = document.getElementById('dtNasc').value;

    var age = Math.floor(moment(new Date()).diff(moment(dtNascimento),'years',true));

    var regexNome = somenteLetras(nome);
    var regexEmail = validEmail(email);
    if (id == 'nomeUser') {
        if (!regexNome) {
            document.getElementById('nomeUser').style.border = "3px solid red";
            document.getElementById('aviso-erro-nome').classList.replace('d-none', 'd-block');

        } else if (nome.length > 1 && regexNome == true) {
            document.getElementById('aviso-erro-nome').classList.replace('d-block', 'd-none');
            document.getElementById('nomeUser').style.border = "3px solid lightgreen";
            validacaoNome = true;
        }
    } else if (id == 'email') {
        if (!regexEmail) {
            document.getElementById('email').style.border = "3px solid red";
            document.getElementById('aviso-erro-email').classList.replace('d-none', 'd-block');
        } else {
            document.getElementById('aviso-erro-email').classList.replace('d-block', 'd-none');
            document.getElementById('email').style.border = "3px solid lightgreen";
            validacaoEmail = true;
        }
    } else if (id == 'selectEstado') {
        if (estado == 'estado') {
            document.getElementById('selectEstado').style.border = "3px solid red";
            document.getElementById('aviso-erro-estado').classList.replace('d-none', 'd-block');
        } else {
            document.getElementById('selectEstado').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-estado').classList.replace('d-block', 'd-none');
            validacaoEstado = true;
        }
    } else if (id == 'selectCidade') {
        if (cidade == 'Cidade') {
            document.getElementById('selectCidade').style.border = "3px solid red";
            document.getElementById('aviso-erro-cidade').classList.replace('d-none', 'd-block');
        } else {
            document.getElementById('aviso-erro-cidade').classList.replace('d-block', 'd-none');
            document.getElementById('selectCidade').style.border = "3px solid lightgreen";
            validacaoCidade = true;
        }
    } else if (id == 'userPwd') {
        if (password == '' || password.length < 8) {
            document.getElementById('aviso-erro-password').classList.replace('d-none', 'd-block');
            document.getElementById('userPwd').style.border = "3px solid red";
        } else {
            document.getElementById('aviso-erro-password').classList.replace('d-block', 'd-none');
            document.getElementById('userPwd').style.border = "3px solid lightgreen";
            validacaoPassword = true;
        }

    } else if (id == 'confSenha') {
        if (confPassword == '' || confPassword.length < 8) {
            document.getElementById('aviso-erro-confPassword').classList.replace('d-none', 'd-block');
            document.getElementById('confSenha').style.border = "3px solid red";
        } else {
            document.getElementById('aviso-erro-confPassword').classList.replace('d-block', 'd-none');
            document.getElementById('confSenha').style.border = "3px solid lightgreen";
            validacaoConfPassword = true;

        }

    } else if (id == 'dtNasc') {
        if (dtNascimento == '') {
            document.getElementById('aviso-erro-dtNasc').classList.replace('d-none', 'd-block');
            document.getElementById('dtNasc').style.border = "3px solid red";
        }else if(age < 18){
            document.getElementById('aviso-erro-dtNasc').classList.replace('d-none', 'd-block');
            document.getElementById('dtNasc').style.border = "3px solid red";
            document.getElementById('aviso-erro-dtNasc').innerHTML = "Você precisa ter mais de 18 anos para se cadastrar!!"
        } else {
            document.getElementById('aviso-erro-dtNasc').classList.replace('d-block', 'd-none');
            document.getElementById('dtNasc').style.border = "3px solid lightgreen";
            validacaoDtNascimento = true;

        }
    }
}


function somenteLetras(palavra) {
    const filter_nome = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;

    if (!filter_nome.test(palavra)) {
        return false;
    }
    if (filter_nome.test(palavra)) {
        return true;
    }

}

function validEmail(email) {
    const Padraoemail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!Padraoemail.test(email)) {
        return false;
    } else {
        return true;
    }
}

function validaForm() {
    if (!validacaoNome) {
        document.getElementById('nomeUser').style.border = "3px solid red";
        document.getElementById('aviso-erro-nome').classList.replace('d-none', 'd-block');

    } else if (!validacaoEmail) {
        document.getElementById('email').style.border = "3px solid red";
        document.getElementById('aviso-erro-email').classList.replace('d-none', 'd-block');
    } else if (!validacaoEstado) {
        document.getElementById('selectEstado').style.border = "3px solid red";
        document.getElementById('aviso-erro-estado').classList.replace('d-none', 'd-block');
    } else if (!validacaoCidade) {
        document.getElementById('selectCidade').style.border = "3px solid red";
        document.getElementById('aviso-erro-cidade').classList.replace('d-none', 'd-block');
    } else if (!validacaoPassword) {
        document.getElementById('aviso-erro-password').classList.replace('d-none', 'd-block');
        document.getElementById('userPwd').style.border = "3px solid red";
    } else if (!validacaoConfPassword) {
        document.getElementById('aviso-erro-confPassword').classList.replace('d-none', 'd-block');
        document.getElementById('confSenha').style.border = "3px solid red";
    } else if (!validacaoDtNascimento) {
        document.getElementById('aviso-erro-dtNasc').classList.replace('d-none', 'd-block');
        document.getElementById('dtNasc').style.border = "3px solid red";
    } else {
        register();
    }
}

function register() {
    let nome = document.getElementById('nomeUser').value;
    let email = document.getElementById('email').value;
    let cidade = document.getElementById('selectCidade').value;
    let estado = document.getElementById('selectEstado').value;
    let password = document.getElementById('userPwd').value;
    let confPassword = document.getElementById('confSenha').value;



    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/insertUser",
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
        },
        "data": {
            "name": nome,
            "email": email,
            "state": estado,
            "city": cidade,
            "dateOfBirth": GetFormattedDate(),
            "password": password
        }
    }

    $.ajax(settings).done(function (response) {
        showResponse(response);
        console.log(response)
    });
}


function GetFormattedDate() {
    let dtNascimento = document.getElementById('dtNasc').value;
    var partes = dtNascimento.split("-");
    let ano = partes[0];
    let mes = partes[1];
    let dia = partes[2];

    let dateFormatted = dia + '/' + mes + '/' + ano;

    return dateFormatted;

}

function showResponse(resposta) {
    if (resposta == "Usuário cadastrado") {
        alertify.alert('Leilão de Quadrinhos', 'Cadastro efetuado com sucesso...');
        setTimeout(function () {
            window.open('index.html', '_self');
        }, 4000);
    } else {
        document.getElementById('email').style.border = "3px solid red";
        document.getElementById('aviso-erro-email').classList.replace('d-none', 'd-block');
        document.getElementById('aviso-erro-email').innerHTML = "Este email já esta cadastrado.";
    }

}


function apiCidades() {
    let estado = document.getElementById('selectEstado').value;
    var codEstado = '0';
    switch (estado) {
        case 'Acre':
            codEstado = 12
            break;
        case 'Alagoas':
            codEstado = 27
            break;
        case 'Amapá':
            codEstado = 16
            break;
        case 'Amazonas':
            codEstado = 13
            break;
        case 'Bahia':
            codEstado = 29
            break;
        case 'Ceará':
            codEstado = 23
            break;
        case 'Distrito Federal':
            codEstado = 53
            break;
        case 'Espírito Santo':
            codEstado = 32
            break;
        case 'Goiás':
            codEstado = 52
            break;
        case 'Maranhão':
            codEstado = 21
            break;
        case 'Mato Grosso':
            codEstado = 51
            break;
        case 'Mato Grosso do Sul':
            codEstado = 50
            break;
        case 'Minas Gerais':
            codEstado = 31
            break;
        case 'Pará':
            codEstado = 15
            break;
        case 'Paraíba':
            codEstado = 25
            break;
        case 'Paraná':
            codEstado = 41
            break;
        case 'Pernambuco':
            codEstado = 26
            break;
        case 'Piauí':
            codEstado = 22
            break;
        case 'Rio de Janeiro':
            codEstado = 33
            break;
        case 'Rio Grande do Norte':
            codEstado = 24
            break;
        case 'Rio Grande do Sul':
            codEstado = 43
            break;
        case 'Rondônia':
            codEstado = 11
            break;
        case 'Roraima':
            codEstado = 14
            break;
        case 'Santa Catarina':
            codEstado = 42
            break;
        case 'São Paulo':
            codEstado = 35
            break;
        case 'Sergipe':
            codEstado = 28
            break;
        case 'Tocantins':
            codEstado = 17
            break
    }
    console.log(codEstado);

    fetch("http://servicodados.ibge.gov.br/api/v1/localidades/estados/" + codEstado + "/municipios")
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            let cidades = response;
            console.log(response)
            cidades.forEach(function (item) {
                option = new Option(item.nome, item.nome);
                document.getElementById('selectCidade').options[document.getElementById('selectCidade').length] = option;
                document.getElementById('selectCidade').disabled = false;
            });
        })

}