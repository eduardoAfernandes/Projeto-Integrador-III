function loadDados() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/find-products-by-user",
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
            $('#divCarregando').fadeOut('slow');
            localStorage.setItem('find-products-by-user', JSON.stringify(response));
            $('#tableData').show()
            $('#optionsTables').show();


            for (i = 0; i <= response.data.length; i++) {
                // console.log('ID do Produto: '+response.data[i].productID)
                // console.log('Numero de Paginas '+response.data[i].pagesNumber)
                // console.log('Peso '+response.data[i].weight)
                // console.log('Editora: '+ response.data[i].publisher)
                // console.log('Titulo: '+ response.data[i].title)
                // console.log('Status: '+ response.data[i].productStatus.status)
                // console.log('Formato: '+ response.data[i].comicFormat)
                // console.log('--------------------------------------')
                if (response.data[i].productStatus.productStatusID == '3') {
                    $("#tabela").append("<tr>" + 
                    "<td class='text-center'><img src='" + response.data[i].coverImage + "' alt='' height='100'></img></td>" +
                    "<td><h5 class='text-center'>" + response.data[i].title + "</h5></td>" + "<td class='text-center'>" + response.data[i].productStatus.status + "<input type='hidden'  value='" + response.data[i].productID + "'>" + "</td>" +
                    "<td class='text-center'>" + "<img class='btnModalProduto' src='img/edit.png' onclick='mostraAvisoProdutoEmLeilao()'" +"</td>" +
                    "<td class='text-center'>" + "<input type='hidden'id='productID'  value='" + response.data[i].productID + "'>" +"<img class='btnModalGerenciarLeilao'"  + "data-toggle='modal' data-id='" + response.data[i].productID + "' data-target='#modalGerenciaLeilao' " +
                    "src='img/auction.png'" +"<input type='hidden'id='productID'  value='" + response.data[i].productID + "'>" + "<td class='text-center'>" +"<input type='hidden'id='productID'  value='" + response.data[i].productID + "'>" + "<img src='img/delete.png' class='btnDelectProduct'"+ 
                    "data-toggle='modal' data-id='" + response.data[i].productID + "' data-target='#modalExcluiProduto' " +
                    +"</td>" +
                    "</tr>");
                } else if (response.data[i].productStatus.productStatusID == 4) {
                    $("#tabela").append("<tr>" + 
                    "<td class='text-center'><img src='" + response.data[i].coverImage + "' alt='' height='100'></img></td>" +
                        "<td class='text-center'><h5 class='text-center'>" + response.data[i].title + "</h5></td>" + "<td class='text-center'>" + response.data[i].productStatus.status +"<td>"+"<p class='text-danger'> Leiloado </p>"+ "</td>"+ "</td>" +
                        "<td class='text-center'>" + "<p class='text-success'>Produto Leiloado</p>" + "</td>" +
                        "<td class='text-center'>" + "<img src='img/delete.png''" +"</td>" 
                        +"</tr>");
                }else if (response.data[i].productStatus.productStatusID == 2) {
                    $("#tabela").append("<tr>" + 
                    "<td class='text-center'><img src='" + response.data[i].coverImage + "' alt='' height='100'></img></td>" +
                    "<td class='text-center'><h5 class='text-center'>" + response.data[i].title + "</h5></td>" + "<td class='text-center'><p class='text-danger'>" + response.data[i].productStatus.status + "</p><input type='hidden'  value='" + response.data[i].productID + "'>" + "</td>" +
                    "<td class='text-center'>" + "<img class='btnModalProduto'" + "data-toggle='modal' data-id='" + response.data[i].productID + "' data-target='#modalDadosQuadrinho' " +
                    "src='img/edit.png'" + "<input type='hidden'id='productID'  value='" + response.data[i].productID + "'>" + "</td>" +
                    "<td class='text-center'>" + "<img class='btnModalAtivar'"  + "data-toggle='modal' data-id='" + response.data[i].productID + "' data-target='#modalAviso' " +
                    "src='img/auction.png'" + "</td>" + "<td class='text-center'>" + "<input type='hidden'id='productID'  value='" + response.data[i].productID + "'>"+"<img src='img/delete.png' class='btnDelectProduct'"+ 
                    "data-toggle='modal' data-id='" + response.data[i].productID + "' data-target='#modalExcluiProduto' " +"</td>" +
                    "</tr>");
                }
                
                else {
                    $("#tabela").append("<tr>" + 
                    "<td class='text-center'><img src='" + response.data[i].coverImage + "' alt='' height='100'></img></td>" +
                        "<td class='text-center'><h5>" + response.data[i].title + "</h5></td>" + "<td class='text-center'>" + response.data[i].productStatus.status + "<input type='hidden'  value='" + response.data[i].productID + "'>" + "</td>" +
                        "<td class='text-center'>" + "<img class='btnModalProduto'" + "data-toggle='modal' data-id='" + response.data[i].productID + "' data-target='#modalDadosQuadrinho' " +
                        "src='img/edit.png'" + "<input type='hidden'id='productID'  value='" + response.data[i].productID + "'>" + "</td>" +
                        "<td class='text-center'>" + "<img class='btnModalChangeToActivate'"  + "data-toggle='modal' data-id='" + response.data[i].productID + "' data-target='#modalLeilao' " +
                        "src='img/auction.png'" + "</td>" +  "<td class='text-center'>" + "<input type='hidden'id='productID'  value='" + response.data[i].productID + "'>"+"<img src='img/delete.png' class='btnDelectProduct'"+ 
                        "data-toggle='modal' data-id='" + response.data[i].productID + "' data-target='#modalExcluiProduto' " +"</td>" +
                        "</tr>");
                }



            }
        })



}
function changetableParticipations(){
document.getElementById('tableData').style.display = 'none';
    document.getElementById('tabelaParticipations').style.display = 'block';

    document.getElementById('option-table-participations').style.borderTopRightRadius = '25%';
    document.getElementById('option-table-participations').style.boxShadow = '3px 3px black';
    document.getElementById('option-table-meus-quadrinhos').style.borderTopLeftRadius = "0%";
    document.getElementById('option-table-meus-quadrinhos').style.boxShadow = '0px 0px black';
    document.getElementById('textoTableQuadrinhos').style.display = 'block';
    document.getElementById('textoTableParticipations').style.display = 'none';

}

function changetableQuadrinhos(){
    document.getElementById('tableData').style.display = 'block';
    document.getElementById('tabelaParticipations').style.display = 'none';
    document.getElementById('option-table-participations').style.borderTopRightRadius = '0%';
    document.getElementById('option-table-participations').style.boxShadow = "0px 0px black";
    document.getElementById('option-table-meus-quadrinhos').style.borderTopLeftRadius = "25%";
    document.getElementById('option-table-meus-quadrinhos').style.boxShadow = '5px 5px black';
    document.getElementById('textoTableQuadrinhos').style.display = 'none';
    document.getElementById('textoTableParticipations').style.display = 'block';

}



loadDados();
