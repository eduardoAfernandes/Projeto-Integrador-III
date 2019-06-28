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

    fetch("http://servicodados.ibge.gov.br/api/v1/localidades/estados/"+codEstado+"/municipios")
    .then(function(response){
      return response.json();
    })
    .then(function(response){
        let cidades = response;
        cidades.forEach(function(item){
           option = new Option(item.nome,item.nome);
           document.getElementById('selectCidade').options[ document.getElementById('selectCidade').length] = option;
           document.getElementById('selectCidade').disabled = false;
        });
      })
    
}

function populateInputs(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:8080/webserver_leilao_war_exploded/controller/find-user-by-id",
        "method": "GET",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
        },
        "xhrFields": {
            "withCredentials": true
          }
    }

    $.ajax(settings)
    .done(function (response) {
        return response.data;
    })
    .done(function (response) {
        console.log(response.data);

        document.getElementById('nome').value = response.data.name;
        document.getElementById('email').value = response.data.email;

        document.getElementById('selectEstado').value = response.data.state;
        option = new Option(response.data.city, response.data.city);
        document.getElementById('selectCidade').options[document.getElementById('selectCidade').length] = option;
        document.getElementById('selectCidade').value = response.data.city;
    })
}

let validacaoNome = false;
let validacaoEstado = false;
let validacaoCidade = false;

function validaCampo(id){
    let nome = document.getElementById('nome').value
    let estado = document.getElementById('selectEstado').value
    let cidade = document.getElementById('selectCidade').value
    let password = document.getElementById('password').value;
    let Confpassword = document.getElementById('confPassword').value;


    let regexNome = somenteLetras(nome);

    if (id == 'nome') {
        if(!regexNome){
            document.getElementById('nome').style.border = "3px solid red";
            document.getElementById('aviso-erro-nome').classList.replace('d-none','d-block');
        }else{
            document.getElementById('nome').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-nome').classList.replace('d-block', 'd-none');

        }
        
    } else if(id == 'selectEstado') {
        if(estado == 'estado'){
            document.getElementById('selectEstado').style.border = "3px solid red";
            document.getElementById('aviso-erro-estado').classList.replace('d-none','d-block');

        }else{
            document.getElementById('selectEstado').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-estado').classList.replace('d-block', 'd-none');

        }
    }else if(id == 'selectCidade'){
        if(cidade == 'cidade'){
            document.getElementById('selectCidade').style.border = "3px solid red";
            document.getElementById('aviso-erro-cidade').classList.replace('d-none','d-block');

        }else{
            document.getElementById('selectCidade').style.border = "3px solid lightgreen";
            document.getElementById('aviso-erro-cidade').classList.replace('d-block', 'd-none');

        }
    }
}
    
    
    function validaForm() {
        let nome = document.getElementById('nome').value
        let estado = document.getElementById('selectEstado').value
        let cidade = document.getElementById('selectCidade').value
        let password = document.getElementById('password').value;
        let Confpassword = document.getElementById('confPassword').value;
        let regexNome = somenteLetras(nome);
    
        if (!regexNome) {
            document.getElementById('nome').style.border = "3px solid red";
            document.getElementById('aviso-erro-nome').classList.replace('d-none', 'd-block');
        } else {
            document.getElementById('nome').style.border = "3px solid lightgreen";

            validacaoNome = true;
        }
    
        if (estado == 'estado') {
            document.getElementById('selectEstado').style.border = "3px solid red";
            document.getElementById('aviso-erro-estado').classList.replace('d-none', 'd-block');
    
        } else {
            document.getElementById('selectEstado').style.border = "3px solid lightgreen";

            validacaoEstado = true;
        }
        if (cidade == 'cidade') {
            document.getElementById('selectCidade').style.border = "3px solid red";
            document.getElementById('aviso-erro-cidade').classList.replace('d-none', 'd-block');
    
        } else {
            document.getElementById('selectCidade').style.border = "3px solid lightgreen";

            validacaoCidade = true;
        }
    
        if(validacaoNome && validacaoEstado && validacaoCidade){
            if(window.confirm("Confirmar alterações")){
                alert("Atualiza")
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