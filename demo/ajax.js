function getJSON(endpoint) {
  var request = new XMLHttpRequest()
  request.open('GET', endpoint, true)
  return new Promise((resolve, reject) => {
    request.onload = function() {
      request.status >= 200 && request.status < 400 ? resolve(JSON.parse(request.responseText)) : reject(request.status)
    }
    request.onerror = reject
    request.send()
  })
}
