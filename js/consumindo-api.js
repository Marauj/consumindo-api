function ajax() {
    senha   = "ipwise@9587";
    usuario = "apiWS";
    $.ajax({
        url: "https://b1.ativy.com:9804/B1iXcellerator/exec/ipo/vP.0010000102.in_HCSX/com.sap.b1i.vplatform.runtime/INB_HT_CALL_SYNC_XPT/INB_HT_CALL_SYNC_XPT.ipo/proc/BuscaITM?pageNumber=1&rowsPerCall=10", 
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        type: "POST",
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

// ajax();

// function RequestService() {
//     senha   = "ipwise@9587";
//     usuario = "apiWS";
//     $.post({
//         header: {
//             'Content-Type': 'application/json;charset=UTF-8',
//             'Transfer-Encoding':	'chunked',
//             'User-Agent': 'github/Marauj',
//             'Authorization': 'Basic YXBpV1M6aXB3aXNlQDk1ODc=> Accept: */*',
//              'Set-Cookie':	'JSESSIONID=82E46233E98017C056F531BCF1B16986; Path=/B1iXcellerator; Secure; HttpOnly',
//              'X-FRAME-OPTIONS':	'SAMEORIGIN',
//         },
//         type: "POST",
//         url: "https://b1.ativy.com:9804/B1iXcellerator/exec/ipo/vP.0010000102.in_HCSX/com.sap.b1i.vplatform.runtime/INB_HT_CALL_SYNC_XPT/INB_HT_CALL_SYNC_XPT.ipo/proc/BuscaITM?pageNumber=1&rowsPerCall=10",
//         contentType: "application/json; charset=utf-8",
        
//         data: {username: usuario, password: senha},
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
