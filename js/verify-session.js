// function session() {
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "http://localhost:8080/webserver_leilao_war_exploded/controller/session",
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