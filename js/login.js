let validacaoUsuario = false;
let validacaoSenha = false;


function validaCampo(id) {
    const nomeUsuario = document.getElementById('userLgn').value.trim();
    const password = document.getElementById('userPwd').value.trim();

    var regexSoLetras = somenteLetras(nomeUsuario);

    if (id == 'userLgn') {
        if (nomeUsuario == '' || regexSoLetras == false) {
            document.getElementById('userLgn').style.border = "3px solid red";
            document.getElementById('aviso-erro-nomeUsuario').classList.replace('d-none', 'd-block');

        } else if (nomeUsuario.length > 1 && regexSoLetras == true) {
            document.getElementById('aviso-erro-nomeUsuario').classList.replace('d-block', 'd-none');
            document.getElementById('userLgn').style.border = "3px solid lightgreen";
            validacaoUsuario = true;
        }
    } else if (id == 'UserPwd') {
        if (password == '' || password.length < 8) {
            document.getElementById('aviso-erro-password').classList.replace('d-none', 'd-block');
            document.getElementById('userPwd').style.border = "3px solid red";

        } else {
            document.getElementById('userPwd').style.border = "3px solid lightgreen";
            validacaoSenha = true;

        }
    }

}


function validaForm() {
    if (!validacaoUsuario) {
        document.getElementById('userLgn').style.border = "3px solid red";
        document.getElementById('aviso-erro-nomeUsuario').classList.replace('d-none', 'd-block');
    } else if (!validacaoSenha) {
        document.getElementById('aviso-erro-password').classList.replace('d-none', 'd-block');
        document.getElementById('userPwd').style.border = "3px solid red";
    } else {
        document.getElementById('formLogin').submit();
    }
}

function somenteLetras(palavra) {
    var filter_nome = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;

    if (!filter_nome.test(palavra)) {
        return false;
    }
    if (filter_nome.test(palavra)) {
        return true;
    }

}