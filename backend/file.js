var fs = require('fs');

const cwd = process.cwd();
var WorkspacePath = "/home/arch/Desktop/TestFolder/test";
//get Path from frontend
function PathFiles(){
    //here call for data from front end 
    //front end will as confirm path like are you sure naming folder etc.
    try{
        if(!fs.existsSync(WorkspacePath)){
            fs.mkdir(WorkspacePath);
        }
    } catch(err){
        console.error(err);
    }
    //return WorkspacePath;
}

function dirContent(){
    // WorkspacePath = function PathFiles();
    PathFiles();
    console.log(fs.readdirSync(WorkspacePath));
}


dirContent();