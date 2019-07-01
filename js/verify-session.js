// function session() {
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://webserver-leilao.azurewebsites.net/webserver-leilao/controller/session",
//         "method": "GET",
//         "headers": {
//             "content-type": "application/x-www-form-urlencoded",
//             "cache-control": "no-cache",
//         },
//         "xhrFields": {
//             "withCredentials": true
//           }
//     }

//     $.ajax(settings)
//         .done(function (response) {showResponse(response)})
//         .fail(function (response) {goHome(response)});
// }

// function showResponse(response) {
//     console.log(response.user);
// }

// function goHome(response) {
//     console.log("Sem permissão.")
//     window.location.replace("/");
// }

// session();