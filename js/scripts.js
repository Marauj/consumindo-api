// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('POST', 'https://b1.ativy.com:9804/B1iXcellerator/exec/ipo/vP.0010000102.in_HCSX/com.sap.b1i.vplatform.runtime/INB_HT_CALL_SYNC_XPT/INB_HT_CALL_SYNC_XPT.ipo/proc/BuscaITM?pageNumber=1&rowsPerCall=10', true)

request.onload = function () {
  // Begin accessing JSON data here
}

var request = new XMLHttpRequest()

request.open('POST', 'https://b1.ativy.com:9804/B1iXcellerator/exec/ipo/vP.0010000102.in_HCSX/com.sap.b1i.vplatform.runtime/INB_HT_CALL_SYNC_XPT/INB_HT_CALL_SYNC_XPT.ipo/proc/BuscaITM?pageNumber=1&rowsPerCall=10', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      console.log(movie.title)
    })
  } else {
    console.log('error')
  }
}

request.send()