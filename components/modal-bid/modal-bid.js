let timeToRetry = 3000;
let firstUser = "";
let secordUser = "";
let thirdUser = "";
let loggedUser = "";

// $("body").keypress(function (event) {
//     // event.preventDefault();
//     console.log("opaaa")
//     if (event.key.toLowerCase() === 'esc'.toLowerCase()) {
//         $(".swal2-cancel").click();
//     }
// });
has = function (obj, key) {
    return key.split(".").every(function (x) {
        if (typeof obj != "object" || obj === null || !x in obj)
            return false;
        obj = obj[x];
        return true;
    });
}

$(document).on("click", ".link-detalhes", function () {
    var auctionID = $(this).data('id');

    // console.log(auctionID);

    // var auction = JSON.parse(localStorage.getItem('find-all-auctions')).data.filter((obj) => {
    //     return obj.auctionID === auctionID;
    // })[0]

    // console.log(auction);

    loadSpecificAuction(auctionID);
    // $("#modal-bid-title").html( auction.product.title );

    let modalBidIsShow = false;

    setTimeout(function () {
        modalBidIsShow = ($("#modalBidd").data('bs.modal') || {})._isShown;
    }, 2000);

    console.log(modalBidIsShow)
    while (modalBidIsShow) {
        console.log("Entrou...");
    }

});

$(document).on("click", "#btnConfirmBid", function () {
    if ($('.swal2-confirm').html() !== 'Sim!') {
        refreshValue();
    }
});


function refreshValue() {
    if ($('.swal2-confirm').html() !== 'Sim!') {
        $('.swal2-confirm').prop('disabled', true).html("Carregando. Aguarde...");
    }

    // let auctionID = 11;
    let auctionID = localStorage.getItem("auctionContext");

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/public/find-bid-by-auction?auctionID=${auctionID}`,
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
        console.log(response);

        let bidValue = '';
        if (response.data.length > 0) {
            bidValue = formatValueToFloat(response.data[0].auction.currentValue + response.data[0].auction.defaultBid);
            if ($('.swal2-confirm').length > 0) {
                if ($('.swal2-confirm').html() !== 'Sim!') {
                    $('.swal2-confirm').prop('disabled', false).html(`Efetuar lance: ${bidValue}`);
                }
                setTimeout(refreshValue, timeToRetry);
            }
        } else {
            loadSpecificAuction(auctionID);
        }

    })
}

// Sim está duplicado... erro de implementação. to do para corrigir.
function findBids(auctionID) {
    // let auctionID = 11;
    // let auctionID = localStorage.getItem("auctionContext");

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/public/find-bid-by-auction?auctionID=${auctionID}`,
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

            // console.log('Sucesso Bid Call |' + JSON.stringify(response) );

            var tree = {};
            if (response.data[0]) {
                tree = response.data[0];
            }
            firstUser = has(tree, 'user.userID') ? (tree.user.userID + " - " + tree.user.name) : firstUser;

            tree = {};
            if (response.data[1]) {
                tree = response.data[1];
            }
            secordUser = has(tree, 'user.userID') ? (tree.user.userID + " - " + tree.user.name) : secordUser;

            tree = {};
            if (response.data[2]) {
                tree = response.data[2];
            }
            thirdUser = has(tree, 'user.userID') ? (tree.user.userID + " - " + tree.user.name) : thirdUser;

            loggedUser = has(response, 'user.userID') ? response.user.userID + " - " + response.user.name : '';

            if (loggedUser != '' && firstUser === loggedUser) {
                $('#firstUserTd').addClass('bg-success').html('Você');
                firstUser = 'Você';
            } else {
                if (firstUser.length > 25) {
                    firstUser = firstUser.substring(0, 25) + ' ...';
                }
                $('#firstUserTd').removeClass('bg-success').html(firstUser);
            }
            if (loggedUser != '' && secordUser === loggedUser) {
                $('#secondUserTd').addClass('bg-success').html('Você');
                secordUser = 'Você';
            } else {
                if (secordUser.length > 25) {
                    secordUser = secordUser.substring(0, 25) + ' ...';
                }
                $('#secondUserTd').removeClass('bg-success').html(secordUser);
            }
            if (loggedUser != '' && thirdUser === loggedUser) {
                $('#thirdUserTd').addClass('bg-success').html('Você');
                thirdUser = 'Você';
            } else {
                if (thirdUser.length > 25) {
                    thirdUser = thirdUser.substring(0, 25) + ' ...';
                }
                $('#thirdUserTd').removeClass('bg-success').html(thirdUser);
            }

            $('#nometa').html("Nome");


        })
        .fail(function (response) {
            console.log('Falha Bid Call |' + JSON.stringify(response));
            findBids(auctionID);
        })
}

function loadSpecificAuction(auctionID, auto) {
    findBids(auctionID);
    if (!auto) {
        $('#modal-bid-title').html('');
        $('#modal-bid-body').html('').append(`<div id="divCarregandoBid" class="progresso py-4">
            <div class="row ">
                <div class="col-12 text-center">
                    <p style="font-size: 15px">Carregando</p>
                </div>
                <div class="col-12 text-center">
                    <img src="img/Spinner-1s-200px.gif" alt="" srcset="" width="30px">
                </div>
            </div>
        </div>`)
        $('#divCarregandoBid').fadeIn('slow');
    }

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/public/find-auction-by-id?auctionID=${auctionID}`,
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

            if ($('.swal2-confirm').length > 0) {
                if ($('.swal2-confirm').html() !== 'Sim!') {
                    $('.swal2-confirm').prop('disabled', false).html(`Efetuar lance: ${formatValueToFloat(response.data.currentValue + response.data.defaultBid)}`);
                }
                setTimeout(refreshValue, timeToRetry);
            }

            return response
        })
        .done(function (response) {

            $('#divCarregandoBid').fadeOut('slow');
            localStorage.setItem('find-auction-by-id', JSON.stringify(response));

            if ($('#modalBid').hasClass('show')) {

                let auctionID = response.data.auctionID;
                let initialDate = response.data.initialDate;
                let duration = response.data.duration;
                let initialValue = response.data.initialValue;
                let currentValue = formatValueToFloat(response.data.currentValue);
                let defaultBid = formatValueToFloat(response.data.defaultBid);
                let auctionStatus = response.data.auctionStatus.status;
                let coverImage = response.data.product.coverImage;
                let timeToFinalize = duration > 1 ? duration + ' dias' : duration + ' dia';
                let statusIcon = "<span class='oi oi-circle-check py-2' style='color: lightgreen'></span>";
                if (duration == 0) statusIcon = "<span class='oi oi-circle-x py-2' style='color: lightred'></span>";
                let productTitle = response.data.product.title;
                let productPagesNumber = response.data.product.pagesNumber;
                let productWeight = response.data.product.weight;
                let productPublisher = response.data.product.publisher;
                let productComicFormat = response.data.product.comicFormat;
                let productStatus = response.data.product.productStatus.status;
                let originCity = response.data.product.user.city;
                let originUF = response.data.product.user.state;
                let originUserName = response.data.product.user.name;

                $('#modal-bid-title').html(productTitle);

                if (!auto) {
                    $('#modal-bid-body').html('');
                }

                $('#modal-bid-body').html(
                    `          
                    <div class='col-12 col-md-12 col-lg-12 text-center py-4;' style='margin: 15px 30px 35px 0px; width: 255px; min-width: 255px; max-width: 255px; height: 396px; min-height: 396px; max-height: 396px;'>
                    <div class='cx-item text-light' style='width: 255px; min-width: 255px; max-width: 255px; height: 396px; min-height: 396px; max-height: 396px;'>
                    <div class='cx-header'>
                    <div class='row'>
                    <div class='col-9 text-center '>
                    <h5 class='py-1'>
                    Finaliza em ${timeToFinalize}
                    </h5>
                    </div>
                    <div class='col-3'>
                    ${statusIcon}
                    </div>
                    </div>
                    </div>
                    <div class='cx-body' style='width: 255px; min-width: 255px; max-width: 255px; height: 396px; min-height: 396px; max-height: 396px;'>
                    <img src='${coverImage}' class='img-fluid' style='width: 255px; min-width: 255px; max-width: 255px; height: 396px; min-height: 396px; max-height: 396px;' alt='Imagem da capa do quadrinho ${name}' id='img-card${i}'>
              </div>
              <div class='cx-footer bg-dark'>
              <div class='row'>
              <div class='col-6 text-center pulse'>
              <div class='row'>
              <div class='col-12 text-center'>
              <dl class='mt-2'>
              <dt class='ml-3'> V. Atual:</dt>
              <dt class='ml-3' style='font-size:15px'> ${currentValue}</dt>
              </dl>
              </div>
              </div>
              </div>
              <div class='col-6'>
              <button type='button' class='btn btn-dar-lance btn-primary' onclick="confirmBid(${auctionID}, '${productTitle}')">
              Dar Lance
                                  <span class='badge badge-light'>+${defaultBid}</span>
                              </button>
                          </div>
                          <!-- <div class='row border-top caixa-link-detalhes text-center '>
                              <div class='col-12 bg-dark'>
                                  <a href='#' class='link-detalhes'>Ver mais detalhes</a>
                                  <span class='oi oi-arrow-circle-right ml-1'></span>
                              </div>        
                          </div> -->                      
                      </div>
                     
                  </div>
              </div>
          </div>
          <div class="text-center bg-dark text-light">
            <p>Maiores lances p/ usuário</p>
          </div>       
          
          <table class="table table-sm">
            <thead>
                <tr class="bg-info text-light">
                <th scope="col">#</th>
                <th scope="col" id="nometa">Carregando...</th>
                </tr>
            </thead>
            <tbody>
            <tr>
            <th scope="row">1</th>
            <td id="firstUserTd"></td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td id="secondUserTd"></td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td id="thirdUserTd"></td>
            </tr>
            </tbody>
            </table>
            <div class="text-center bg-dark text-light">
            <p>Todos os detalhes</p>
          </div>       
          
          <table class="table table-sm">
            <tbody>
                <tr>
                <td class="bg-info text-light">Data inicial</td>
                <td>${initialDate.split("-")[2]+"/"+initialDate.split("-")[1]+"/"+initialDate.split("-")[0]}</td>
                </tr>
                <tr>
                <td class="bg-info text-light">Finaliza em</td>
                <td>${duration} dia(s)</td>
                </tr>
                <tr>
                <td class="bg-info text-light">Valor inicial</td>
                <td>${initialValue}</td>
                </tr>
                <tr>
                <td class="bg-info text-light">Valor atual</td>
                <td>${currentValue}</td>
                </tr>
                <tr>
                <td class="bg-info text-light">Lance padrão</td>
                <td>${defaultBid}</td>
                </tr>
                <tr>
                <td class="bg-info text-light">Status leilão</td>
                <td>${auctionStatus}</td>
                </tr>
                <tr>
                <td class="bg-info text-light">Nº Páginas</td>
                <td>${productPagesNumber}</td>
                </tr>
                <tr>
                <td class="bg-info text-light">Peso</td>
                <td>${productWeight}</td>
                </tr>
                <tr>
                <td class="bg-info text-light">Editora</td>
                <td>${productPublisher}</td>
                </tr>
                <tr>
                <td class="bg-info text-light">Formato</td>
                <td>${productComicFormat}</td>
                </tr>
                <tr>
                <td class="bg-info text-light">Status produto</td>
                <td>${productStatus}</td>
                </tr>
                <tr>
                <td class="bg-info text-light">Cidade</td>
                <td>${originCity}</td>
                </tr>
                <tr>
                <td class="bg-info text-light">UF</td>
                <td>${originUF}</td>
                </tr>
                <tr>
                <td class="bg-info text-light">Dono</td>
                <td>${originUserName.split(" ")[0]}</td>
                </tr>
            </tbody>
            </table>
              `
                )

                setTimeout(function () {
                    loadSpecificAuction(auctionID, true);
                }, 5000);
            }


        })
        .fail(function (response) {
            if ($('.swal2-confirm').length > 0) {
                if ($('.swal2-confirm').html() !== 'Sim!') {
                    setTimeout(refreshValue, timeToRetry);
                }
            } else {
                loadSpecificAuction(auctionID);
            }
        });


}


function confirmBid(auctionID, productTitle) {
    localStorage.setItem("auctionContext", auctionID);
    if (localStorage.getItem("logged") == "true") {
        Swal.fire({
            title: `Confirmar lance no quadrinho <br><br> "${productTitle}"?`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '',
            cancelButtonText: 'Cancelar!'
        }).then((result) => {
            if (result.value) {

                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": `https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/insert-bid`,
                    "method": "POST",
                    "headers": {
                        "content-type": "application/x-www-form-urlencoded",
                        "cache-control": "no-cache",
                    },
                    "xhrFields": {
                        "withCredentials": true
                    },
                    "data": {
                        "auctionID": auctionID
                    }
                }

                $.ajax(settings).done(function (response) {
                    loadSpecificAuction(auctionID);
                    if ($('#modalBid').length) {
                        $('#modalBid').modal('show');
                    }
                })
            }
        })
    } else {
        Swal.fire({
            title: `Você precisa fazer o login para dar lances, deseja ir até a página de login?`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim!',
            cancelButtonText: 'Cancelar!'
        }).then((result) => {
            if (result.value) {
                window.open("/login.html", "_self");
            }
        })
    }
}

function formatValueToFloat(value) {
    value = new String(value);
    if (value.indexOf('.') != -1) {
        value.replace('.', ',');
    } else {
        value = value + ',00'
    }
    value = 'R$ ' + value;
    return value;
}