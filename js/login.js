let validacaoEmail = false;
let validacaoSenha = false;


function validaCampo(id) {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    var regexEmail = validEmail(email);

     if (id == 'email') {
        if (!regexEmail) {
            document.getElementById('email').style.border = "3px solid red";
            document.getElementById('aviso-erro-email').classList.replace('d-none', 'd-block');
        } else {
            document.getElementById('aviso-erro-email').classList.replace('d-block', 'd-none');
            document.getElementById('email').style.border = "3px solid lightgreen";
            validacaoEmail = true;
        }
    } else if (id == 'password') {
        if (password == '' || password.length < 8) {
            document.getElementById('aviso-erro-password').classList.replace('d-none', 'd-block');
            document.getElementById('password').style.border = "3px solid red";

        } else {
            document.getElementById('aviso-erro-password').classList.replace('d-block', 'd-none');
            document.getElementById('password').style.border = "3px solid lightgreen";
            validacaoSenha = true;

        }
    }

}


function validaForm() {
    if (!validacaoEmail) {
        document.getElementById('email').style.border = "3px solid red";
        document.getElementById('aviso-erro-email').classList.replace('d-none', 'd-block');
    } else if (!validacaoSenha) {
        document.getElementById('aviso-erro-password').classList.replace('d-none', 'd-block');
        document.getElementById('password').style.border = "3px solid red";
    } else {
        login();
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

function login(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    var settings = {
        "async": true,
        "crossDomain": true,        
        "url": "http://localhost:8080/webserver_leilao_war_exploded/controller/login",
        "method": "POST",
        "headers": {
          "content-type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
        },
        "data": {
            "email": email,
            "password": password
        },
        "xhrFields": {
            "withCredentials": true
          }
      }

      $.ajax(settings)
      .done(function (response) {goHome(response)})
      .fail(function(response){showResponse()});
    }


function showResponse(){
    document.getElementById('caixa-login-incorrect').classList.replace('d-none','d-block');
}

function goHome(response) {
    console.log("Logado")
    window.open('index.html','_self');
}