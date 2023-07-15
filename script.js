const connectEvent = document.getElementById('connectId');
const cloudsEvent = document.getElementById('CloudsId');
const filesEvent = document.getElementById('FilesId');
const workspaceEvent = document.getElementById('WorkspaceId');
const logoutEvent = document.getElementById('logout');
const changeInP = document.getElementById('changeIt');

connectEvent.innerText
//workspace funtions 
function WorkspaceEvent(){
    changeInP.innerText = "WORKSPACE";
}

// connect options funtions

function ConnectEvent(){
    changeInP.innerText = "CONNECT";
}

function CloudsEvent(){
    changeInP.innerText = "CLOUD";
}

function FilesEvent(){
    changeInP.innerText = "FILES";
}

function LgoutEvent(){

}
workspaceEvent.addEventListener('click',WorkspaceEvent);
//workspaceEvent.addEventListener("click",WorkspaceEvent);
connectEvent.addEventListener('click',ConnectEvent);

cloudsEvent.addEventListener('click',CloudsEvent);

filesEvent.addEventListener('click',FilesEvent);
