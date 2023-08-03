const exp = require('constants');
const fs = require('fs');
const mkdirp = require('mkdirp');

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

function dirContent(WorkspacePath){
    // WorkspacePath = function PathFiles();
    PathFiles(WorkspacePath);
    try {
        var nfiles = fs.readdirSync(WorkspacePath);
    }catch(err){
        nfiles = 'err'
        console.error(err);
    }
    return nfiles;
}
exports.file = dirContent;
