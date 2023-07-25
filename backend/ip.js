const request = require('request')



function getPublicIP() {
    return new Promise((resolve, reject) => {
      request('https://api.ipify.org?format=json', (error, response, body) =>