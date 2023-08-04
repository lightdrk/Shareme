const exp = require('constants');
const mkdirp = require('mkdirp');
const {Menv,config} = require('./envM')
const fs = require('fs');


const cwd = process.cwd();
//var WorkspacePath = "/home/arch/Desktop/TestFolder/test";
//get Path from frontend
function PathFiles(WorkspacePath){
    //here call for data from front end 
    //front end will as confirm path like are you sure naming folder etc.
    try{
        if(!fs.existsSync(WorkspacePath)){
            mkdirp.sync(WorkspacePath);
            console.log("dir is been created.");
        }
    } catch(err){
        console.error(err);
    }
    //return WorkspacePath;
}

require('dotenv').config()

function dirContent(WorkspacePath='/'){
    var nfiles ;
    // WorkspacePath = function PathFiles();
    if(WorkspacePath.length > 1){
        PathFiles(WorkspacePath);
        try {
            nfiles = fs.readdirSync(WorkspacePath);
            config(WorkspacePath);
            
        }catch(err){
            nfiles = 'err'
            console.error(err);
        }
    }else{
        let update;
        fs.readFile('config.config',(err,data)=>{
            update = JSON.parse(data)[data];
        })
        nfiles = fs.readFileSync(update);
    }
    return nfiles;
    
}
exports.file = dirContent;
