chrome.runtime.onMessage.addListener(function (e, sender, sendResponse) {
  console.log(sender, sendResponse, chrome.runtime.MessageSender)
  const { message, data } = e
  const tabId = sender.tab.id
  switch (message) {
    case 'XHR':
      request_proxy(data, tabId, sendResponse); break
  }
})
function request_proxy({ url, method, data }, tabId, sendResponse) {
  var XHR = new XMLHttpRequest()
  console.log(tabId)
  XHR.open(method, url)
  XHR.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  XHR.send(data)
  XHR.onreadystatechange = function () {
    if (XHR.readyState === 4) {
      chrome.tabs.sendMessage(tabId, {
        message: 'XHR_response',
        data: XHR.responseText
      })
    }
  }
}