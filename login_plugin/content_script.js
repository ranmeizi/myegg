var button = document.createElement('button');
button.id = 'chrome_eventBus'
button.addEventListener('sendMessage', function (e) {
    console.log(e.target.dataset)
    chrome.runtime.sendMessage('lfifkkdnlboaklepoppdpjhdjflnobpb', 'hahaha')
})
button.addEventListener('request_proxy', function (e) {
    let { eventData } = e.target.dataset
    eventData = JSON.parse(eventData)
    let { url, method, data } = eventData
    chrome.runtime.sendMessage('lfifkkdnlboaklepoppdpjhdjflnobpb', {
        message: 'XHR',
        data: {
            url,
            method,
            data
        }
    })
})
document.body.appendChild(button);
const e = new Event('content_script_Ready')
document.body.dispatchEvent(e)


chrome.runtime.onMessage.addListener(function (e, sender, sendResponse) {
    console.log(e, sender, sendResponse)
    const { message, data } = e
    switch (message) {
        case 'XHR_response':
            response(data); break
    }
})

function response(data) {
    button.dataset['eventData'] = data
    const e = new Event('response')
    button.dispatchEvent(e)
}
