const express = require('express');
const corns = require('cors');
const file = require('./file');
const app = express();
const port = 3000;

app.use(express.json());
app.use(corns());

app.post('/file',(req,res) => {
    let WorkspacePath = req.body.path;
    console.log(typeof(WorkspacePath));
    file.filein(WorkspacePath)
    res.json({response: 200})
});

app.listen(port,'localhost',()=>{
    console.log(`http://localhost:${port}`);
});
