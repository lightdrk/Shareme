const WebSocket = require('ws');
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');


const wss = new WebSocket.Server({port: 3001});
const {file} = require('./file')

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());
app.get('/hello',(req,res)=>{
    res.send('hello world');
})

app.post('/fileInfo',async(req,res)=>{
    if (req.body.data){
        let data = file(req.body.data);
        console.log(data);
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
    let interval;
    ws.on('message',message=>{
        let check = message.toString();
        console.log(check);
        if (check == 'workspace'){
            interval = setInterval((interval)=>{         
                const dataSent = file();
                ws.send(JSON.stringify({'data': dataSent}));
            },5000);
        }else if (check == 'file'){
            if (interval){
                clearInterval(interval);
            }
                // close the interval when the connection is closed
        }
    });
    ws.on('close',()=>{
        console.log('connection closed');
    });
});
