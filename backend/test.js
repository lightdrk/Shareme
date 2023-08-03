const ftpd = require('ftpd')
const fs = require('fs')
const path = require('path');
const { error } = require('console');
const { exit } = require('process');

require('dotenv').config()

var keyFile;
var certFile;
var passpharse;
var server;

var options = {
    LocalHost: process.env.LocalIP || '127.0.0.1',
    Host: process.env.PublicIP,
    Port: process.env.Port || 80,
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


server = new ftpd.FtpServer(options.LocalHost,{
    //getting shared folder path from front end
    getInitialCwd: (connection)=>{
        let paths=path.join(process.cwd(),'shared');
        if(fs.existsSync(paths)){
            return paths;
        }else{
            console.log(paths);
            console.log('path not found');
        }
    },
    getRoot: function(){
        console.log(process.cwd())
        return process.cwd();
    },
});

server.on('error',function(error){
    console.log('FTP Server error:',error);
});

server.debugging = 4;

server.on('client:connected', function(connection){
    console.log('client connected: '+connection.remoteAddress);
    connection.on('command:user',function(user,success,failure){
        console.log(user);
        if (user){
            success(user);
        }else{
            failure();
        }
    });
    connection.on('command:pass',function(pass,success,failure){
        if(process.env.Pass == pass){
            console.log('success',pass);
            success('connected');
        }else{
            failure();
        }
    });
    connection.on('command:retr', ()=>{
        let sharePath = '/home/arch/Desktop/README.license';
        console.log(sharePath)
        fs.readFile(sharePath,(err,data)=>{
            if (err){
                connection.write(550,'Error READING FILE');
                failure();
            }else{
                connection.write(150,'data connection established');
                connection.dataSocket.write(data);
                connection.dataSocket.end();
                connection.write(226,'closing connection');
            }
        })
    });
});





server.listen(options.Port);
console.log('port :' + options.Port);
