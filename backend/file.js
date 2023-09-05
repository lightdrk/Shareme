const exp = require('constants');
const mkdirp = require('mkdirp');
const {Menv,config} = require('./envM');
const fs = require('fs');
const envPath = require('./config.json');

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


function dirContent(WorkspacePath=null){
    var nfiles ;
    // WorkspacePath = function PathFiles();
    if(WorkspacePath){
        PathFiles(WorkspacePath);
        try {
            nfiles = fs.readdirSync(WorkspacePath);
            if ( WorkspacePath != envPath.workspace ){
                config(WorkspacePath);
            }
            
        }catch(err){
            nfiles = ['err'];
            console.error(err);
        }
    }else{
        var Workspace = require('./config.json');
        // issue need to be viewed
        
        nfiles = fs.readdirSync(Workspace['workspace']);
    }
    return nfiles;
    
}
exports.file = dirContent;
