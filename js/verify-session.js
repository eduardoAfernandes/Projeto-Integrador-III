function session() {

    var url = 'https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/session';

    if (window.location.pathname == '/login.html') {
        url = url + '?invalidate=true'
    }

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
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
        $("#userIconStatus").removeClass('loggedOut').addClass('loggedIn').prop("onclick", null).off("click");
        $('#userBoxStatus').append(
            `<div class="dropdown-menu">
                <a class="dropdown-item" href="../../meus-quadrinhos.html">Gerenciar meus leilões</a>
                <a class="dropdown-item" href="../../alterar-dados-usuario.html">Alterar meus dados</a>
                <a class="dropdown-item" href="../../login.html">Sair</a>
            </div>`
        )
        $('body').removeClass('deactivate');
    }
}

function goHome(response) {
    if (window.location.pathname != '/') {
        window.location.replace("/login.html");        
    }
}

session();