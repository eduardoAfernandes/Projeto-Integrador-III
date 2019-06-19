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
    let cidade = document.getElementById('cidade').value.trim();
    let estado = document.getElementById('selectEstado').value;
    let password = document.getElementById('userPwd').value.trim();
    let confPassword = document.getElementById('confSenha').value.trim();
    let dtNascimento = document.getElementById('dtNasc').value;


    var regexNome = somenteLetras(nome);
    var regexCidade = somenteLetras(cidade);
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
    } else if (id == 'cidade') {
        if (!regexCidade) {
            document.getElementById('cidade').style.border = "3px solid red";
            document.getElementById('aviso-erro-cidade').classList.replace('d-none', 'd-block');
        } else {
            document.getElementById('aviso-erro-cidade').classList.replace('d-block', 'd-none');
            document.getElementById('cidade').style.border = "3px solid lightgreen";
            validacaoCidade = true;
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
    } else if (id == 'userPwd') {
        if (password == '' || password.length < 8) {
            document.getElementById('aviso-erro-password').classList.replace('d-none', 'd-block');
            document.getElementById('userPwd').style.border = "3px solid red";
        }else{
            document.getElementById('aviso-erro-password').classList.replace('d-block', 'd-none');
            document.getElementById('userPwd').style.border = "3px solid lightgreen"; 
            validacaoPassword = true;
        }   

    } else if (id == 'confSenha') {
        if (confPassword == '' || confPassword.length < 8) {
            document.getElementById('aviso-erro-confPassword').classList.replace('d-none', 'd-block');
            document.getElementById('confSenha').style.border = "3px solid red";
         }        
        else{
            document.getElementById('aviso-erro-confPassword').classList.replace('d-block', 'd-none');
            document.getElementById('confSenha').style.border = "3px solid lightgreen";
            validacaoConfPassword = true;

        }

    } else if (id == 'dtNasc') {
        if (dtNascimento == '') {
            document.getElementById('aviso-erro-dtNasc').classList.replace('d-none', 'd-block');
            document.getElementById('dtNasc').style.border = "3px solid red";
        }else{
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

function validaForm(){
    if(!validacaoNome){
        document.getElementById('nomeUser').style.border = "3px solid red";
        document.getElementById('aviso-erro-nome').classList.replace('d-none', 'd-block');

    }else if(!validacaoEmail){
        document.getElementById('email').style.border = "3px solid red";
        document.getElementById('aviso-erro-email').classList.replace('d-none', 'd-block');
    }else if(!validacaoCidade){
        document.getElementById('cidade').style.border = "3px solid red";
        document.getElementById('aviso-erro-cidade').classList.replace('d-none', 'd-block');
    }else if(!validacaoEstado){
        document.getElementById('selectEstado').style.border = "3px solid red";
        document.getElementById('aviso-erro-estado').classList.replace('d-none', 'd-block');
    }else if(!validacaoPassword){
        document.getElementById('aviso-erro-password').classList.replace('d-none', 'd-block');
        document.getElementById('userPwd').style.border = "3px solid red"; 
    }else if(!validacaoConfPassword){
        document.getElementById('aviso-erro-confPassword').classList.replace('d-none', 'd-block');
        document.getElementById('confSenha').style.border = "3px solid red";
    }else if(!validacaoDtNascimento){
        document.getElementById('aviso-erro-dtNasc').classList.replace('d-none', 'd-block');
        document.getElementById('dtNasc').style.border = "3px solid red";
    }
    else{
        register();
    }
}

function register(){
    let nome = document.getElementById('nomeUser').value;
    let email = document.getElementById('email').value;
    let cidade = document.getElementById('cidade').value.trim();
    let estado = document.getElementById('selectEstado').value;
    let password = document.getElementById('userPwd').value;
    let confPassword = document.getElementById('confSenha').value;

 

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:8080/webserver_leilao_war_exploded/controller/insertUser",
        "method": "POST",
        "headers": {
          "content-type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
        },
        "data": {
            "name": nome,
            "status": "1",
            "email": email,
            "dateOfBirth": GetFormattedDate(),
            "password": password
        }
      }

      $.ajax(settings).done(function (response) {
        console.log(response);
      });
    }

    
    function GetFormattedDate() {
        let dtNascimento = document.getElementById('dtNasc').value;
        var partes = dtNascimento.split("-");
        let ano = partes[0];
        let mes = partes[1];
        let dia = partes[2];

        let dateFormatted = dia+'/'+mes+'/'+ano;

        return dateFormatted;

    }