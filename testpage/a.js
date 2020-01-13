let iptUrl = document.getElementById('url')
let iptMethod = document.getElementById('method')
let iptData = document.getElementById('data')

document.getElementById('req-default').addEventListener('click', () => {
  let url = iptUrl.value
  let method = iptMethod.value
  let data = iptData.value

  let XHR = new XMLHttpRequest()
  XHR.open(method, url)
  XHR.send(JSON.stringify(data))
})

let $chrome_api = new EventBus()

class EventBus {
  constructor() {
    this.allEvent = {}
  }
  on(eventName, callback) {
    this.allEvent[eventName] = [
      ...(this.allEvent[eventName] || []),
      callback
    ]
  }
  emit(eventName, data) {
    const emitList = this.allEvent[eventName] || []
    emitList.forEach(fn => fn(data))
  }
  un(eventName, callback) {
    const emitList = this.allEvent[eventName] || []
    const index = emitList.find(fn === callback)
    emitList.splice(index, 1)
  }
}