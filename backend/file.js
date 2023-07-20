const fs = require('fs');
const mkdirp = require('mkdirp');
const express = require('express');


const app = express();
const port = 3000;


const cwd = process.cwd();
var WorkspacePath = "/home/arch/Desktop/TestFolder/test";
//get Path from frontend
function PathFiles(){
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

function dirContent(){
    // WorkspacePath = function PathFiles();
    PathFiles();
    try {
        var nfiles = fs.readdirSync(WorkspacePath);
        console.log(nfiles);
    }catch(err){
        console.error(err);
    }
    return nfiles;
}


dirContent();