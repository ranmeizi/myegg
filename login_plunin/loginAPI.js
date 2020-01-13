$chrome_api.on('sendMessage', function (e) {
  console.log(e)
  chrome.runtime.sendMessage('konnbajjalndbonmknjjieofadfincoi', '1')
})