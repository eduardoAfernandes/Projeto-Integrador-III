function session() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/session",
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
        .done(function (response) {showResponse(response)})
        .fail(function (response) {goHome(response)});
}

function showResponse(response) {
    console.log(response.user);
    if ($('#statusUser'.length)) {
        $('#statusUser').html(response.user.name);
        $("#userIconStatus").toggleClass('loggedOut loggedIn').prop("onclick", null).off("click");
        $('#userBoxStatus').append(
            `<div class="dropdown-menu">
                <a class="dropdown-item" href="../../meus-quadrinhos.html">Gerenciar meus leilões</a>
                <a class="dropdown-item" href="../../alterar-dados-usuario.html">Alterar meus dados</a>
            </div>`
        )
    }
}

function goHome(response) {
    if (window.location.pathname != '/') {
        window.location.replace("/");        
    }
}

session();