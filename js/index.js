var step = 4;
var limit = step;
var offset = 0;
var endOfList = false;
var columnToOrderBy = 'data_inicio';
var directionToOrderBy = 'desc';
var titleToSearch = '';
var publishingCompanys = '';
var isSearch = false;

$(document).on("click", "#conhecerBtn0", function () {
    $('#titleToSearch').val('Avengers').change();
    $('#btnSearchProduct0').click();
})
$(document).on("click", "#conhecerBtn1", function () {
    $('#titleToSearch').val('LJA - Justice League - 11').change();
    $('#btnSearchProduct0').click();
})
$(document).on("click", "#conhecerBtn2", function () {
    $('#titleToSearch').val('The Avengers - The Kree-Skrull').change();
    $('#btnSearchProduct0').click();
})
$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    } else {
        return results[1] || 0;
    }
}
$(function () {
    loadDados();
    if ($.urlParam('auction')) {
        console.log('oieee')
        setTimeout(function () {
            $('#paliativo').attr('data-id', $.urlParam('auction')).click();            
        }, 3000);
    }
    $("#titleToSearch").keypress(function (event) {
        // event.preventDefault();
        if (event.key.toLowerCase() === 'enter'.toLowerCase()) {
            search();
        }
    });
})

$(window).scroll(function () {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if (scrollHeight - scrollPosition < 10) {
        if (!endOfList) {
            $('#divCarregando').fadeIn('slow');
            loadDados();
        }
    }

});

function loadDados() {
    $('#divCarregando').fadeIn('slow');

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/public/find-all-auction-paginate?limit=${limit}&offset=${offset}&columnToOrderBy=${columnToOrderBy}&directionToOrderBy=${directionToOrderBy}&titleToSearch=${titleToSearch}&publishingCompanys=${publishingCompanys}`,
        "method": "GET",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
        },
        "xhrFields": {
            "withCredentials": true
        }
    }

    offset = offset + step;

    $.ajax(settings).done(function (response) {
            return response
        })
        .done(function (response) {

            $('#divCarregando').fadeOut('slow');
            $('#loadMoreProducts').fadeIn('slow');

            localStorage.setItem('find-all-auctions', JSON.stringify(response));

            if (response.data.length === 0 || response.data.length < step) {
                endOfList = true;
                $('#divFimLista').fadeIn('slow');
                $('#loadMoreProducts').fadeOut('slow');
            }


            console.log(response);
            for (i = 0; i < response.data.length; i++) {

                let auctionID = response.data[i].auctionID;
                let duration = response.data[i].duration;
                let initialDate = response.data[i].initialDate;
                let initialValue = response.data[i].initialValue;
                let currentValue = formatValueToFloat(response.data[i].currentValue);
                let defaultBid = formatValueToFloat(response.data[i].defaultBid);
                let auctionStatus = response.data[i].auctionStatus.status;
                let coverImage = response.data[i].product.coverImage;
                let timeToFinalize = duration > 1 ? duration + ' dias' : duration + ' dia';
                let productTitle = response.data[i].product.title;

                let thisUserId = -1;
                if (response.data && response.data.user && response.data.user.userID) {
                    thisUserId = response.data.user.userID;
                }

                let statusIcon = "<span class='oi oi-circle-check py-2' style='color: lightgreen'></span>";
                if (duration == 0) statusIcon = "<span class='oi oi-circle-x py-2' style='color: lightred'></span>";

                if (duration <= 0) continue;
                $("#sub-sectionProdutos").append(
                    `<div class='col-12 col-md-8 col-lg-4 text-center py-4;' style='margin: 15px 30px 35px 0px; width: 255px; min-width: 255px; max-width: 255px; height: 396px; min-height: 396px; max-height: 396px;'>
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
                    <div class='col-6 text-center'>
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
                    <button id="btnConfirmBid" type='button' class='btn btn-dar-lance btn-primary' onclick="confirmBid(${auctionID}, '${productTitle}', ${thisUserId})">
                    Dar Lance
                                        <span class='badge badge-light'>+${defaultBid}</span>
                                    </button>
                                </div>
                                <div class='row border-top caixa-link-detalhes text-center '>
                                    <div class='col-12 bg-dark'>
                                        <a href='#' class='link-detalhes' data-toggle='modal' data-target='#modalBid' data-id="${auctionID}">Ver mais detalhes<span class='oi oi-arrow-circle-right ml-1'></span></a>
                                        
                                    </div>        
                                </div>
                            
                            </div>
                           
                        </div>
                    </div>
                </div>`
                );
            }
            if (isSearch && response.data.length > 0) searchOk();
            else if (isSearch) searchNotOk();
            isSearch = false;
        })

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

function searchOk() {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "3000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    toastr["success"]("Filtro realizado. Verifique a listagem dos quadrinhos ao lado.", "Mensagem");

    $('html, body').animate({
        scrollTop: $($('#sectionSearch')).offset().top
    }, 500);

}

function searchNotOk() {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "3000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    toastr["error"]("Não foram encontrados resultados pra sua pesquisa.", "Mensagem");

    $('html, body').animate({
        scrollTop: $($('#sectionSearch')).offset().top
    }, 500);

}

function search() {
    $('#divFimLista').fadeOut('slow');

    offset = 0;
    isSearch = true;
    endOfList = false;
    $('#sub-sectionProdutos').html('');
    columnToOrderBy = $('#columnToOrderBy').val().split("|")[0];
    directionToOrderBy = $('#columnToOrderBy').val().split("|")[1];
    titleToSearch = $('#titleToSearch').val();
    publishingCompanys = $('#publishingCompanys').val();
    loadDados();
}

function searchClear() {
    $('#divFimLista').fadeOut('slow');
    $('#loadMoreProducts').fadeIn('slow');
    offset = 0;
    isSearch = true;
    endOfList = false;
    $('#sub-sectionProdutos').html('');
    $('#columnToOrderBy').val('data_inicio|desc').change();
    $('#titleToSearch').val('').change();
    $('#publishingCompanys').val('Todas').change();
    columnToOrderBy = $('#columnToOrderBy').val().split("|")[0];
    directionToOrderBy = $('#columnToOrderBy').val().split("|")[1];
    titleToSearch = $('#titleToSearch').val();
    publishingCompanys = $('#publishingCompanys').val();
    loadDados();
}