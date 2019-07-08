// Tooltips

var tooltips = {
    "titulo": "O titulo representa o nome do quadrinho",
    "categoria": "A categoria do quadrinho define se ele é um TPB, ou seja, uma coleção ou se é um quadrinho de edição mensal. Passe o mouse sobre as opções para mais informações",
    "categoriaTPB": "TPB é uma coleção de quadrinhos reunidas em uma só encadernação. É uma historia completa",
    "categoriaMENSAL": "MENSAL quer dizer que esse quadrinho faz parte de uma publicação mensal, ou seja, tem um segmento de história",
    "pesoQuadrinho": "Neste campo você deve listar quantos GRAMAS pesam o seu quadrinho. Digite somente o numero sem informar a unidade",
    "editora": "Neste campo você deve selecionar qual a editora do seu quadrinho. Se não for Marvel ou DC, selecione OUTRAS",
    "numeroPaginas": "Aqui você deve listar o numero de páginas do seu quadrinho. Digite somente numeros",
    "tipoCapa": " Neste campo você entre o tipo de campa, entre HARD e SOFT, ou seja, capa DURA OU MOLE",
    "tipoCapaMole": "SOFT é o tipo de capa MOLE",
    "tipoCapaDura": "HARD é o tipo de capa DURA"
};

function carregarTooltip() {
    document.getElementById('tpTitulo').title = tooltips.titulo;
    document.getElementById('tpEditora').title = tooltips.editora;
    document.getElementById('tpCategoria').title = tooltips.categoria;
    document.getElementById('tpCategoriaTPB').title = tooltips.categoriaTPB;
    document.getElementById('tpCategoriaMENSAL').title = tooltips.categoriaMENSAL;
    document.getElementById('tpNPaginas').title = tooltips.numeroPaginas;
    document.getElementById('tpPeso').title = tooltips.pesoQuadrinho;
    document.getElementById('tpTipoCapa').title = tooltips.tipoCapa;
    document.getElementById('tpTipoCapaDura').title = tooltips.tipoCapaDura;
    document.getElementById('tpTipoCapaMole').title = tooltips.tipoCapaMole;
}


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
            $('#divCarregando').hide();
            localStorage.setItem('find-products-by-user', JSON.stringify(response));
            $('#tableData').show()
            $('#optionsTables').show();
            populateTableParticipations();

            for (i = 0; i <= response.data.length; i++) {
                // console.log('ID do Produto: '+response.data[i].productID)
                // console.log('Numero de Paginas '+response.data[i].pagesNumber)
                // console.log('Peso '+response.data[i].weight)
                // console.log('Editora: '+ response.data[i].publisher)
                // console.log('Titulo: '+ response.data[i].title)
                // console.log('Status: '+ response.data[i].productStatus.status)
                // console.log('Formato: '+ response.data[i].comicFormat)
                // console.log('--------------------------------------')
                if (response.data[i].productStatus.productStatusID == 3) {
                    $("#tabela").append(
                        `<tr style='background-color:#FFFF66'>
                        <td class='text-center'><img height='100' src='${response.data[i].coverImage}'></img></td>
                        <td><h5 class='text-center'>${response.data[i].title}</h5></td>
                        <td class='text-center text-primary'>EM LEILÃO<input type='hidden' value='${response.data[i].productID}'></td>                        
                        <td class='text-center'><img class='btnModalProduto' src='img/edit.png' onclick='mostraAvisoProdutoEmLeilao()'></td>              
                        <td class='text-center'><input type='hidden'id='productID'  value='${response.data[i].productID}'><img class='btnModalGerenciarLeilao' data-toggle='modal' data-id='${response.data[i].productID}' data-target='#modalGerenciaLeilao' src='img/auction.png'>
                        <input type='hidden' id='productID'  value='${response.data[i].productID}'></td>
                        <td class='text-center'><img src='img/delete.png' onclick='avisoNaoDelete()' class='btnDelectProduct' data-target='#modalExcluiProduto'></td>
                        `)

                } else if (response.data[i].productStatus.productStatusID == 4) {
                    $("#tabela").append(
                        `
                        <tr>
                        <td class='text-center'><img src='${response.data[i].coverImage}' alt='' height='100'></img></td>
                        <td class='text-center'><h5 class='text-center'>${response.data[i].title}</h5></td>
                        <td class='text-center'>${response.data[i].productStatus.status}
                        <td><p class='text-danger'> Leiloado </p></td></td>
                        <td class='text-center'><p class='text-success'>Produto Leiloado</p></td>
                        </tr>
                        `
                    )
                } else if (response.data[i].productStatus.productStatusID == 2) {
                    $("#tabela").append(
                        `
                        <tr style='background-color:#ea8b6e;' class='my-2'>
                        <td class='text-center'><img src='${response.data[i].coverImage}' alt='' height='100'></img></td>
                        <td class='text-center'><h5 class='text-center'>${response.data[i].title}</h5></td>
                        <td class='text-center'><p class='text-danger'>${response.data[i].productStatus.status}</p><input type='hidden'  value='${response.data[i].productID}'></td>
                        <td class='text-center'><img class='btnModalProduto' data-toggle='modal' data-id='${response.data[i].productID}' data-target='#modalDadosQuadrinho' src='img/edit.png'><input type='hidden'id='productID'  value='${response.data[i].productID}'></td>
                        <td class='text-center'><img class='btnModalAtivar' data-toggle='modal' data-id='${response.data[i].productID}' data-target='#modalAviso'  src='img/auction.png' </td>
                        <td class='text-center'><input type='hidden' id='productID'  value='${response.data[i].productID}'><img src='img/delete.png' class='btnDelectProduct' data-toggle='modal' data-id='${response.data[i].productID}' data-target='#modalExcluiProduto'></td>                
                        </tr>
                        `
                    );
                } else {
                    $("#tabela").append(
                        `
                        <tr style='background-color:lightgreen'>
                        <td class='text-center'><img src='${response.data[i].coverImage}' alt='' height='100'></img></td>
                        <td class='text-center'><h5>${response.data[i].title}</h5></td>
                        <td class='text-center'>${response.data[i].productStatus.status}<input type='hidden' value='${response.data[i].productID}'></td>
                        <td class='text-center'><img class='btnModalProduto' data-toggle='modal' data-id='${response.data[i].productID}' data-target='#modalDadosQuadrinho' 
                        src='img/edit.png' <input type='hidden' id='productID'  value='${response.data[i].productID}'></td>
                        <td class='text-center'><img class='btnModalChangeToActivate' data-toggle='modal' data-id='${response.data[i].productID}' data-target='#modalLeilao'
                        src='img/auction.png'></td>
                        <td class='text-center'><input type='hidden'id='productID'  value='${response.data[i].productID}'>
                        <img src='img/delete.png' class='btnDelectProduct' data-toggle='modal' data-id='${response.data[i].productID}' data-target='#modalExcluiProduto'></td>
                        </tr>
                        `);
                }
            }
        });



}

function changetableParticipations() {
    document.getElementById('tableData').style.display = 'none';
    document.getElementById('tabelaParticipations').style.display = 'block';

    document.getElementById('option-table-participations').style.boxShadow = '3px 3px black';
    document.getElementById('option-table-meus-quadrinhos').style.borderTopLeftRadius = "0%";
    document.getElementById('option-table-meus-quadrinhos').style.boxShadow = '0px 0px black';
    document.getElementById('textoTableQuadrinhos').style.display = 'block';
    document.getElementById('textoTableParticipations').style.display = 'none';
    document.getElementById('option-table-participations').style.opacity = "1";
    document.getElementById('option-table-meus-quadrinhos').style.opacity = "0.8";
    document.getElementById('tituloAbaMeusQuadrinhos').style.textShadow = "10px 10px 10px black"
    document.getElementById('tituloAbaMeusQuadrinhos').style.fontWeight = "900";  
    document.getElementById('textAbaMeusQuadrinhos').style.textShadow = "15px 15px 15px black"
    document.getElementById('textAbaMeusQuadrinhos').style.fontWeight = "900";
        
    document.getElementById('tituloAbaParticipations').style.textShadow = "0px 0px 0px black"
    document.getElementById('tituloAbaParticipations').style.fontWeight = "0";  
    document.getElementById('textAbaParticipations').style.textShadow = "0px 0px 0px black"
    document.getElementById('textAbaParticipations').style.fontWeight = "0";
    
}



function changetableQuadrinhos() {
    document.getElementById('tableData').style.display = 'block';
    document.getElementById('tabelaParticipations').style.display = 'none';
    document.getElementById('option-table-participations').style.borderTopRightRadius = '0%';
    document.getElementById('option-table-participations').style.boxShadow = "0px 0px black";
    document.getElementById('option-table-meus-quadrinhos').style.opacity = "1"
    document.getElementById('option-table-participations').style.opacity = "0.8";;
    document.getElementById('option-table-meus-quadrinhos').style.boxShadow = '5px 5px black';
    document.getElementById('textoTableQuadrinhos').style.display = 'none';
    document.getElementById('textoTableParticipations').style.display = 'block';
    document.getElementById('tituloAbaMeusQuadrinhos').style.textShadow = "0px 0px 0px black"
    document.getElementById('tituloAbaMeusQuadrinhos').style.fontWeight = "900";  
    document.getElementById('textAbaMeusQuadrinhos').style.textShadow = "15px 15px 15px black"
    document.getElementById('textAbaMeusQuadrinhos').style.fontWeight = "900";
    
    document.getElementById('tituloAbaParticipations').style.textShadow = "10px 10px 10px black"
    document.getElementById('tituloAbaParticipations').style.fontWeight = "900";  
      
    document.getElementById('textAbaParticipations').style.textShadow = "10px 10px 10px black"
    document.getElementById('textAbaParticipations').style.fontWeight = "900";    

}

function populateTableParticipations() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/find-bid-by-user",
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
            return response
        })
        .done(function (response) {
            localStorage.setItem('find-bids-by-user', JSON.stringify(response));
            for (i = 0; i <= response.data.length; i++) {
                $("#tabelaParticipationsDados").append(
                    "<tr>" +
                    "<td class='text-center'><img src='" + response.data[i].auction.product.coverImage + "' alt='' height='100'></img></td>" +
                    "<td class='text-center'>" + response.data[i].auction.product.title + "</td>" +
                    "<td class='text-center'>" + 'R$ ' + response.data[i].bidValue + "</td>" +
                    "<td class='text-center'>" + 'R$ ' + response.data[i].auction.currentValue + "</td>" +
                    "<td class='text-center'>" + response.data[i].auction.auctionStatus.status + "</td>" +
                    +"<td>" + +"</td>" +
                    "</tr>");
            }
        });

}



function loadData() {
    loadDados();
    carregarTooltip();
}