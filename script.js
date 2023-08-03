const connectEvent = document.getElementById('connectId');
const cloudsEvent = document.getElementById('CloudsId');
const filesEvent = document.getElementById('FilesId');
const workspaceEvent = document.getElementById('WorkspaceId');
const logoutEvent = document.getElementById('logout');
const changeInP = document.getElementById('changeIt');
const addUsingJs = document.getElementById('addUsingJs');
const cardInsertion = document.getElementById('cardInsertion');
const topConnect = document.getElementById('connect');
const topUserInput = document.getElementById('UserInput');
const topConnectPtag = document.getElementById('main-connect');

let change ;

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

    change = "workspacePath"
    let addUsingJsHtmlSnippet = `<p id="main-connect">${change}:<input type="text" id="UserInput"><button id="connect" type="button"></button></p>`;
    changeInP.innerText = "WORKSPACE";
    addUsingJs.innerHTML = addUsingJsHtmlSnippet;
    topConnect.addEventListener('click', ()=>{
        var textTopConnectButton;
        textTopConnectButton = topUserInput.value;
        topUserInput.value = "";
        fetch('http://localhost:3000/fileInfo',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({path:textTopConnectButton})
        })
        .then(response => response.json())
        .then(data => {
            let responseFromFile = data;
            console.log(data);
        })
        .catch((error) =>{
            console.error(error);
        })
        
    //will get a response if success 200
    });
    
    cardInsertion.innerHTML = cardInsertionHtmlSnippet;
    
}

// connect options funtions

function ConnectEvent(){
    change = "Connect"
    let addUsingJsHtmlSnippet = `<p id="main-connect">${change}:<input type="text" id="UserInput"><button id="connect" type="button"></button></p>`;
    changeInP.innerText = change;
    addUsingJs.innerHTML = addUsingJsHtmlSnippet;

    cardInsertion.innerHTML = cardInsertionHtmlSnippet;

}

function CloudsEvent(){
    changeInP.innerText = "CLOUD";
    let addUsingJsHtmlSnippet = `<p id="main-connect">${change}:<input type="text" id="UserInput"><button id="connect" type="button"></button></p>`;
    
    addUsingJs.innerHTML = "";
    cardInsertion.innerHTML = ""
}

function FilesEvent(){
    changeInP.innerText = "FILES";
    let addUsingJsHtmlSnippet = `<p id="main-connect">${change}:<input type="text" id="UserInput"><button id="connect" type="button"></button></p>`;

    addUsingJs.innerHTML = "";
    cardInsertion.innerHTML = "";
}

function LgoutEvent(){

}


workspaceEvent.addEventListener('click',WorkspaceEvent);

connectEvent.addEventListener('click',ConnectEvent);

cloudsEvent.addEventListener('click',CloudsEvent);

filesEvent.addEventListener('click',FilesEvent);

