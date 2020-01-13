chrome.runtime.onMessage.addListener(function (e) {
  console.log(e)
  let XHR = new XMLHttpRequest()
  XHR.open('post', 'http://127.0.0.1:7001')
  XHR.send('')
})