const connectEvent = document.getElementById('connectId');
const cloudsEvent = document.getElementById('CloudsId');
const filesEvent = document.getElementById('FilesId');
const workspaceEvent = document.getElementById('WorkspaceId');
const logoutEvent = document.getElementById('logout');
const changeInP = document.getElementById('changeIt');
const addUsingJs = document.getElementById('addUsingJs');
const cardInsertion = document.getElementById('cardInsertion');




var socket = null ;

function  addUsingJsHtmlSnippetConnect(change,placeholder,creds){ 
    if (socket){
        socket.close();
        socket = null;
    }   
    // create a container element to hold the button and input
    const container = document.createElement('p');
    container.id = 'main-connect';
    
    //create an input element 
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.id = 'UserInput';
    inputElement.placeholder = placeholder;

    //create a button element
    const buttonElement = document.createElement('button');
    buttonElement.type = 'button';
    buttonElement.id = 'connect';
    //buttonElement.textContent = 'click me';

	
    container.appendChild(inputElement);
    container.appendChild(buttonElement);
    const existingChild = document.getElementById('connect');
    //append the container to the body or a specific element
    if (existingChild){ 
        if( existingChild.placeholder == change){
            return 
        }else{
            let topConnectPtag = document.getElementById('main-connect');
            addUsingJs.removeChild(topConnectPtag);
        }      
    }
    addUsingJs.appendChild(container);
    buttonElement.addEventListener('click',function(){


        let topUserInput = document.getElementById('UserInput');
        creds[placeholder] = topUserInput.value;
        topUserInput.value = "";
    	if (placeholder == 'password'){

		fetch('http://localhost:3000/connect',{
		    method:'POST',
		    headers:{
			'Content-Type': 'application/json'
		    },
		    body: JSON.stringify(creds)
		})
		.then(response => response.json())
		.then(data => {
		    let responseFromFile = data;
		    console.log('data',data);
		})
		.catch((error) =>{
		    console.error(error);
		})
	}else{
		addUsingJsHtmlSnippetConnect('connect','password',creds);
	}	
    });


}

function  addUsingJsHtmlSnippet(change,placeholder){ 
    
    // create a container element to hold the button and input
    const container = document.createElement('p');
    container.id = 'main-connect';
    
    //create an input element 
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.id = 'UserInput';
    inputElement.placeholder = placeholder;

    //create a button element
    const buttonElement = document.createElement('button');
    buttonElement.type = 'button';
    buttonElement.id = 'connect';
    //buttonElement.textContent = 'click me';

    container.appendChild(inputElement);
    container.appendChild(buttonElement);
    const existingChild = document.getElementById('connect');
    //append the container to the body or a specific element
    if (existingChild){ 
        if( existingChild.placeholder == change){
            return 
        }else{
            let topConnectPtag = document.getElementById('main-connect');
            addUsingJs.removeChild(topConnectPtag);
        }      
    }
    addUsingJs.appendChild(container);


}

const cardInsertionHtmlSnippetFile =  '<div class="cardContainer">' +
                                    '<div class="main-mid">' +
                                    `<img class="iconFileType" src="/home/arch/Desktop/Projects/Shareme/iconimg/files.png">` +
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
const cardInsertionHtmlSnippetFolder =  '<div class="cardContainer">' +
                                    '<div class="main-mid">' +
                                    `<img class="iconFileType" src="/home/arch/Desktop/Projects/Shareme/iconimg/folder.png">` +
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



function ShowTemplate(){

}

//workspace funtions 
function WorkspaceEvent(){
    if (socket){
        socket.send('workspace');
    }
    var data;
    console.log('workspace');
    changeInP.innerText = "WORKSPACE";
    addUsingJsHtmlSnippet("workSpacePath"
,'example');
    //making a socket for constant update
    if (socket == null){
        socket = new WebSocket('ws://localhost:3001');
        
        socket.addEventListener('message',(event)=>{
            data = JSON.parse(event.data);
	    if (data.data[0] == 'err'){
		alert('reconfig file');
		socket.close()
		socket = null;
	    }
            console.log(data);
        });
        socket.addEventListener('open',()=>{
            console.log('established');
            socket.send('workspace');
        });
        socket.addEventListener('close',()=>{
            console.log('closed');
        });
    }

}

// connect options funtions

function ConnectEvent(){
    if (socket){
        socket.close();
        socket = null;
        console.log('web socket closed');
    }
    changeInP.innerText = "Connect";
    var creds={};
    addUsingJsHtmlSnippetConnect("Connect",'ip',creds);
    console.log(creds);

    // attaches event to the top of mid section
    cardInsertion.innerHTML = cardInsertionHtmlSnippetFile;
    cardInsertion.innerHTML = cardInsertionHtmlSnippetFolder;
}

function CloudsEvent(){
    changeInP.innerText = "CLOUD";
    //let addUsingJsHtmlSnippet = `<p id="main-connect">${change}:<input type="text" id="UserInput"><button id="connect" type="button"></button></p>`;
    
    addUsingJs.innerHTML = "";
    cardInsertion.innerHTML = ""
}

function FilesEvent(){
    if (socket){
        socket.send('file');
    }
    if (socket == null){
        socket = new WebSocket('ws://localhost:3001');
    
        socket.addEventListener('message',(event)=>{
            data = JSON.parse(event.data);
            console.log(data);
        });
        socket.addEventListener('open',()=>{
            console.log('established');
            socket.send('file');
        });
        socket.addEventListener('close',()=>{
            console.log('closed');
        });
    }
    changeInP.innerText = "FILES";
    //let addUsingJsHtmlSnippet = `<p id="main-connect">${change}:<input type="text" id="UserInput"><button id="connect" type="button"></button></p>`;

    addUsingJs.innerHTML = "";
    cardInsertion.innerHTML = "";
}

function LgoutEvent(){

}


ConnectEvent();
workspaceEvent.addEventListener('click',WorkspaceEvent);

connectEvent.addEventListener('click',ConnectEvent);

cloudsEvent.addEventListener('click',CloudsEvent);

filesEvent.addEventListener('click',FilesEvent);








//TODO:connect color button , while loading let it show or disable it ,do something with password thingy after trying to connect
