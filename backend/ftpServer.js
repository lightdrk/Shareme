const ftpd = require('ftpd')
const fs = require('fs')
const path = require('path')

require('dotenv').config()

var keyFile
var certFile
var server

var options = {
    LocalHost: process.env.LocalIP || '127.0.0.1',
    Host: process.env.PublicIP,
    port: process.env.Port || 80,
    tls: null,
}
// check and under stand 
if (keyFile && certFile){
    console.log('ftps server running');
    options.tls =  {
        key: fs.readFileSync(path.join(__dirname,keyFile)),
        cert: fs.readFileSync(path.join(__dirname,certFile)),
        ca:  !process.env.CAFile
            ? null
            : process.env.CAFile.split(':').map(function (f){
                return fs.readFileSync(f)
            }),
    }
}else{
    console.log('ssl  err ,cert err')
}

server = new ftpd.FtpServer(options.Host,{
    //getting shared file path from front end
    getInitialCwd: function(){
        return '/ftproot' //change needed
    },
    getRoot: function(){
        return process.cwd()
    },
    // check further and understand 
})
