const ftpd = require('ftpd')
const net = require('net')
const fs = require('fs')
const path = require('path')
const password = require('./password')

let client = net.connect({port:80,host:'google.com'},() =>{
    console.log(client.localAddress);
});



