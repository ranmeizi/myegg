var script = document.createElement('script');
script.src = chrome.runtime.getURL('loginAPI.js');
document.body.appendChild(script);