const fs = require('fs')
const ips = require('./ip')
const password = require('./password')

function Menv(){
    ips.getPublicIP((err,ip_json)=>{
        if (err){
            console.error(err);
        }else{
            console.log(ip_json);
            ips.getLocalIP((err,localip)=>{
                if(err){
                    console.error(err);
                }else{
                    console.log(localip);
                    let value = password.pass();
                    fs.writeFile('.env',`PublicIP = ${ip_json['ip']}\nLocalIP = ${localip}\nPort = 8080\nUser = fptuser\nPWD = ${value}`, function(err){
                        if (err) throw err;
                        console.log('.env created!!!!!')
                    });
                }
            });
            
        }
    });
}

function configWrite(workspacepath){
    
    fs.writeFile('config.json',`{"workspace": "${workspacepath}"}`, function(err){
        if (err) throw err;
        console.log('config created!!!!!');
    });
    
}
exports.Menv = Menv;
exports.config = configWrite;