function ajax() {
    senha   = "ipwise@9587";
    usuario = "apiWS";
    $.ajax({
        url: "https://b1.ativy.com:9804//B1iXcellerator/exec/ipo/vP.0010000102.in_HCSX/com.sap.b1i.vplatform.runtime/INB_HT_CALL_SYNC_XPT/INB_HT_CALL_SYNC_XPT.ipo/proc/BuscaITM?pageNumber=1&rowsPerCall=10 HTTP/1.1", 
        Authorization: "Basic YXBpV1M6aXB3aXNlQDk1ODc=> Accept: */*",
        type: "POST",
        cache: false,
        crossDomain: true,
        dataType: "json",
        data: {username: usuario, password: senha},
        success: function (result) {
            console.log(result);
        },
        error: function (error) {
            console.log(error);
        }
    });   
}

ajax();

// function RequestService() {
//     senha   = "ipwise@9587";
//     usuario = "apiWS";
//     $.ajax({
//         type: "POST",
//         url: "https://b1.ativy.com:9804/B1iXcellerator/exec/ipo/vP.0010000102.in_HCSX/com.sap.b1i.vplatform.runtime/INB_HT_CALL_SYNC_XPT/INB_HT_CALL_SYNC_XPT.ipo/proc/BuscaITM?pageNumber=1&rowsPerCall=10",
//         contentType: "application/json; charset=utf-8",
//         data: {password: senha, username: usuario},
//         dataType: "json",
//         success: function(data) { SucessCallback(data.d); },
//         error: function(data) { FailureCallBack(data); }
//     });
// }

// RequestService();

// function SucessCallback(result) {
//     $('p').html('Resultado: ' + result.Message
//     + ' <br /> Descrição: ' + result.Description);
// }

// function FailureCallBack(result) {
//     alert(result.status + ' ' + result.statusText);
// }
