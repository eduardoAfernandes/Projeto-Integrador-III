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
