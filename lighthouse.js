const chromeLauncher = require('chrome-launcher');
const lighthouse = require('lighthouse');


function launchChromeAndRunLighthouse(url, flags = {}, config = null) {
    return chromeLauncher.launch(flags).then(chrome => {
      flags.port = chrome.port;
      
      return lighthouse(url, flags, config).then(results =>
        chrome.kill().then(() => results));
    });
  }

exports.launchChromeAndRunLighthouse = launchChromeAndRunLighthouse;
