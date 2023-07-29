const fs = require('fs')
const ips = require('./ip')
const password = require('./password')

ips.getPublicIP((err,ip_json)=>{
    if (err){
        console.error(err);
    }else{
        console.log(ip_json.ip);
    }
});

ips.getLocalIP((err,localip)=>{
    if(err){
        console.error(err);
    }else{
        console.log(localip)
    }
});
let value = password.pass();
console.log(value);