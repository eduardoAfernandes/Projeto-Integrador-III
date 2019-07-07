$(document).on("click", ".btn-dar-lance", function () {
    var auctionID = $(this).data('id');

    // console.log(auctionID);

    // var auction = JSON.parse(localStorage.getItem('find-all-auctions')).data.filter((obj) => {
    //     return obj.auctionID === auctionID;
    // })[0]

    // console.log(auction);

    loadSpecificAuction(auctionID);
    // $("#modal-bid-title").html( auction.product.title );


});

   
function loadSpecificAuction(auctionID) {
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
            return response
        })
        .done(function (response) {

            $('#divCarregandoBid').fadeOut('slow');
            localStorage.setItem('find-auction-by-id', JSON.stringify(response));

            let auctionID = response.data.auctionID;
            let productTitle = response.data.product.title;
            let duration = response.data.duration;
            let initialDate = response.data.initialDate;
            let initialValue = response.data.initialValue;
            let currentValue = formatValueToFloat(response.data.currentValue);
            let defaultBid = response.data.defaultBid;
            let auctionStatus = response.data.auctionStatus.status;
            let coverImage = response.data.product.coverImage;
            let timeToFinalize = duration > 1 ? duration + ' dias' : duration + ' dia';

            let statusIcon = "<span class='oi oi-circle-check py-2' style='color: lightgreen'></span>";
            if (duration == 0) statusIcon = "<span class='oi oi-circle-x py-2' style='color: lightred'></span>";

            $('#modal-bid-title').html(productTitle);

            $('#modal-bid-body').html('').append(
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
              <button type='button' class='btn btn-dar-lance btn-primary'>
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
              `
            )

            
        })

    }