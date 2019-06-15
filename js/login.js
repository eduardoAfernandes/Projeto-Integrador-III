function validaCampo(id) {
    const nomeUsuario = document.getElementById('userLgn').value.trim();
    const password = document.getElementById('userPwd').value.trim();

    var regexSoLetras = somenteLetras(nomeUsuario);
     alert(id);

    if(id == 'userLgn'){
        if(nomeUsuario == '' || regexSoLetras == false){
            document.getElementById('aviso-erro-nomeUsuario').classList.replace('d-none','d-block');

        }
        else if(nomeUsuario.length > 1 && regexSoLetras == true){
            document.getElementById('aviso-ok-nomeUsuario').classList.replace('d-none','d-block');
            document.getElementById('userLgn').style.border = "3px solid green";
        }
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