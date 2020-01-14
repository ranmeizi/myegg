var dom = document.createElement('div');
dom.innerHTML = 'ssr'
document.body.appendChild(dom);
console.log('老衲进来了')
document.getElementById('req-background').innerHtml = 'sss'
$chrome_api.on('sendMessage', function (data) {
  console.log(data)
  console.log(chrome.tabs)
  chrome.runtime.sendMessage('konnbajjalndbonmknjjieofadfincoi', '1')
})