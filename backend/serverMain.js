const express = require('express');
const bodyParser = require('body-parser');
const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 3001});
const {file} = require('./file')

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get('/hello',(req,res)=>{
    res.send('hello world');
})

app.post('/fileInfo',async(req,res)=>{
    if (req.body.path){
        let data = file(req.body.path);
        if (data != 'err'){
            res.status(200).json({'data': data});
        }else{
            res.status(500).json({'data': 'err'});
        }
    }else{
        res.status(500).json({'data': 'err'});
    }
    
})
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})

wss.on('connection',ws=>{
    console.log('connection established');
    do {
        ws.send(JSON.stringify({'data': data}));
    }while (true){
        let data = file();
    }
})