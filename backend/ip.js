const request = require('request')
const net = require('net')

let client = net.connect({port:80,host:'google.com'},() =>{
  let ip = client.localAddress;
  client.end()
  return ip;
});

module.exports = {
  getPublicIP :(callback)=>{
      let ip_json;
      request('https://api.ipify.org?format=json',function(err,b,body){
        if (err){
          return callback(err,null);
        }
        ip_json = JSON.parse(body);
        callback(null,ip_json)
        });
      },
  getLocalIP : (callback)=>{
    let client = net.connect({port:80,host:'google.com'},() =>{
      let ip = client.localAddress;
      client.end()
      callback(null,ip);
    });
  }
};
