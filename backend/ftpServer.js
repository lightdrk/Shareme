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
    getInitialCwd: function(sharePath = '/home/arch/Desktop',callback){
        if(fs.existsSync(sharePath)){
            console.log(sharePath)
            return sharePath;
        }else{
            exit('path not found');
        }
    },
    getRoot: function(){
        return process.cwd();
    },
    pasvPortRangeStart: 1025,
    pasvPortRangeEnd: 1050,
    tlsOptions: options.tls,
    allowUnauthorizedTls: false,
    useReadFile: true,
    useWriteFile: false,
    allowedCommands: [ 
    'XMKD',
    'AUTH',
    'TLS',
    'SSL',
    'USER',
    'PASS',
    'PWD',
    'OPTS',
    'TYPE',
    'PORT',
    'PASV',
    'LIST',
    'CWD',
    'MKD',
    'SIZE',
    'STOR',
    'MDTM',
    'DELE',
    'QUIT'
    ],

});

server.on('error',function(error){
    console.log('FTP Server error:',error);
});

server.on('client:connected', function(connection){
    console.log('client connected: '+connection.remoteAddress);
    connection.on('command:user',function(user,success,failure){
        console.log(user);
        if (user){
            success();
        }else{
            failure();
        }
    })
    connection.on('command:pass',function(pass,success,failure){
        console.log('!!!!!!!!!!' + process.env.Pass);
        console.log('#####');
        console.log(process.env.Pass == pass);
        console.log('###########');
        if(process.env.Pass == pass){
            console.log('success',pass);
            success();
        }else{
            failure();
        }
    })
});

server.debugging = 4;
server.listen(options.Port);
console.log('port :' + options.Port);
