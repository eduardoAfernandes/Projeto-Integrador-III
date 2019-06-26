function loadDados() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:8080/webserver_leilao_war_exploded/controller/find-products-by-user",
        "method": "GET",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
        },
        "xhrFields": {
            "withCredentials": true
          }
    }

    $.ajax(settings).done(function (response) {
        return response
    })
    .done(function (response) {
        console.log(response.data)
        console.log(response.data.length)
        for(i=0;i<=response.data.length;i++ ){
            console.log('ID do Produto: '+response.data[i].productID)
            console.log('Numero de Paginas '+response.data[i].pagesNumber)
            console.log('Peso '+response.data[i].weight)
            console.log('Editora: '+ response.data[i].publisher)
            console.log('Titulo: '+ response.data[i].title)
            console.log('Status: '+ response.data[i].productStatus.status)
            console.log('Formato: '+ response.data[i].comicFormat   )

        }

    });
}

loadDados();
