let iptUrl = document.getElementById('url')
let iptMethod = document.getElementById('method')
let iptData = document.getElementById('data')

let $ChromeEventBus = null

document.getElementById('req-default').addEventListener('click', () => {
  let url = iptUrl.value
  let method = iptMethod.value
  let data = iptData.value

  let XHR = new XMLHttpRequest()
  XHR.open(method, url)
  XHR.send(JSON.stringify(data))
})
document.getElementById('req-background').addEventListener('click', () => {
  let url = iptUrl.value
  let method = iptMethod.value
  let data = iptData.value
  let option = {
    url,
    method,
    data
  }
  $ChromeEventBus.dataset['eventData'] = JSON.stringify(option)
  const e = new Event('request_proxy')
  $ChromeEventBus.dispatchEvent(e)
})
document.body.addEventListener('content_script_Ready', Init)
function Init() {
  console.log('hssss', document.body)
  $ChromeEventBus = document.getElementById('chrome_eventBus')
  console.log($ChromeEventBus)
  $ChromeEventBus.addEventListener('response', function (e) {
    let { eventData } = e.target.dataset
    console.log('response', JSON.parse(eventData))
  })
}
