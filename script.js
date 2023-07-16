const connectEvent = document.getElementById('connectId');
const cloudsEvent = document.getElementById('CloudsId');
const filesEvent = document.getElementById('FilesId');
const workspaceEvent = document.getElementById('WorkspaceId');
const logoutEvent = document.getElementById('logout');
const changeInP = document.getElementById('changeIt');
const addUsingJs = document.getElementById('addUsingJs');
const cardInsertion = document.getElementById('cardInsertion');
const addUsingJsHtmlSnippet = '<p id="main-connect">Connect:<input type="text" id="UserInput"><button id="connect" type="button"></button></p>';
const cardInsertionHtmlSnippet =  '<div class="cardContainer">' +
                                    '<div class="main-mid">' +
                                    '<i class="iconFileType" href="">icon</i>' +
                                    '<button class="dottedThree">:</button>' +
                                    '<div class="property"></div>' +
                                    '<p class="FolderName">file or folder name</p>' +
                                    '<p class="property">property time</p>' +
                                    '</div>' +
                                    '<div class="bottomOfCard">' +
                                    '<p class="size">with size</p>' +
                                    '<p class="sharedWith">people</p>' +
                                    '</div>' +
                                    '</div>';
//workspace funtions 
function WorkspaceEvent(){
    changeInP.innerText = "WORKSPACE";
    addUsingJs.innerHTML = "";
    cardInsertion.innerHTML = "";
}

// connect options funtions

function ConnectEvent(){
    changeInP.innerText = "CONNECT";
    addUsingJs.innerHTML = addUsingJsHtmlSnippet;
    cardInsertion.innerHTML = cardInsertionHtmlSnippet;

}

function CloudsEvent(){
    changeInP.innerText = "CLOUD";
    addUsingJs.innerHTML = "";
    cardInsertion.innerHTML = ""
}

function FilesEvent(){
    changeInP.innerText = "FILES";
    addUsingJs.innerHTML = "";
    cardInsertion.innerHTML = ""
}

function LgoutEvent(){

}
workspaceEvent.addEventListener('click',WorkspaceEvent);
//workspaceEvent.addEventListener("click",WorkspaceEvent);
connectEvent.addEventListener('click',ConnectEvent);

cloudsEvent.addEventListener('click',CloudsEvent);

filesEvent.addEventListener('click',FilesEvent);
