const fs = require('fs')
const ips = require('./ip')
const password = require('./password')

ips.getPublicIP((err,ip_json)=>{
    if (err){
        console.error(err);
    }else{
        ips.getLocalIP((err,localip)=>{
            if(err){
                console.error(err);
            }else{
                console.log(localip)
            }
        });
        let value = password.pass();
        fs.writeFile('cred.env',`PublicIP = $(ip_json)\n LocalIP = $(localip)\nPort = 8080\nUser = fptuser\nPWD = $(value) `, function(err){
            if (err) throw err;
        }
        );
    }
});



console.log(value);