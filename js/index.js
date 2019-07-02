function loadDados() {
    console.log("Testesss")
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/public/find-all-auctions",
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
            localStorage.setItem('find-all-auctions', JSON.stringify(response));
            
            
            console.log(response);
            for (i = 0; i < response.data.length; i++) {

                let auctionID = response.data[i].auctionID;
                let duration = response.data[i].duration;
                let initialDate = response.data[i].initialDate;
                let initialValue = response.data[i].initialValue;
                let currentValue = formatValueToFloat(response.data[i].currentValue);
                let defaultBid = response.data[i].defaultBid;
                let auctionStatus = response.data[i].auctionStatus.status;
                let coverImage = response.data[i].product.coverImage;
                let timeToFinalize = duration > 1 ? duration + ' dias' : duration + ' dia';

                let statusIcon = "<span class='oi oi-circle-check py-2' style='color: lightgreen'></span>";
                if (duration == 0) statusIcon = "<span class='oi oi-circle-x py-2' style='color: lightred'></span>";

                $("#sub-sectionProdutos").append(
                `<div class='col-12 col-md-6 col-lg-3 pb-5 pb-md-0 text-center ml-5 ml-md-0'>
                    <div class='cx-item text-light'>
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
                        <div class='cx-body'>
                            <img src='img/thanos.jpg' class='img-fluid' alt='img04' id='img-card'>
                        </div>
                        <div class='cx-footer bg-dark'>
                            <div class='row'>
                                <div class='col-6 text-center'>
                                    <div class='row'>
                                        <div class='col-12 text-center'>
                                            <dl class='mt-2'>
                                                <dt class='ml-3'> V. Atual:</dt>
                                                <dt class='ml-3'> ${currentValue}</dt>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-6'>
                                    <button type='button' class='btn btn-dar-lance btn-primary'>
                                        Dar Lance
                                        <span class='badge badge-light'>+5</span>
                                    </button>
                                </div>
                                <div class='row border-top caixa-link-detalhes text-center '>
                                    <div class='col-12 bg-dark'>
                                        <a href='#' class='link-detalhes'>Ver mais detalhes</a>
                                        <span class='oi oi-arrow-circle-right ml-1'></span>
                                    </div>        
                                </div>
                            
                            </div>
                           
                        </div>
                    </div>
                </div>`
                );
            }
        }
    )
}

function formatDate(timestamp) {
    var date = new Date(timestamp);

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    alert(year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds);
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
loadDados();