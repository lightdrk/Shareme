const connectEvent = document.getElementById('connectId');
const cloudsEvent = document.getElementById('CloudsId');
const filesEvent = document.getElementById('FilesId');
const workspaceEvent = document.getElementById('WorkspaceId');
const logoutEvent = document.getElementById('logout');
const changeInP = document.getElementById('changeIt');
const addUsingJs = document.getElementById('addUsingJs');
const cardInsertion = document.getElementById('cardInsertion');
const settingEvent = document.getElementById('setting');
const settingInsideItem = document.getElementById('settingMenu');
const notificationEvent = document.getElementById('notification');
const notificationInsideItem = document.getElementById('notificationMenu');
const profileEvent = document.getElementById('profile');
const profileInsideItem = document.getElementById('profileMenu');




var time;
var name;
var size;
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
	buttonElement.addEventListener('click', ()=>{


        let topUserInput = document.getElementById('UserInput');
        creds[placeholder] = topUserInput.value;
        topUserInput.value = "";
    	if (placeholder == 'password'){
		document.getElementById('connect').disabled = true;

		fetch('http://localhost:3000/connect',{
		    method:'POST',
		    headers:{
			'Content-Type': 'application/json'
		    },
		    body: JSON.stringify(creds)
		})
		.then(response => response.json())
		.then(async data => {
		    let responseFromFile = await  data;
		    
		    console.log('data',data);
		    if (data['data'] == 0){
			//code here for showing error usin button issue 
		    }
		    addUsingJsHtmlSnippetConnect('connect','ip',creds);
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
function cardInsertionHtmlSnippet(name,time,type,sz){

  const cardContainer = document.createElement('div');
  cardContainer.setAttribute('class', 'cardContainer');
 
  const mainMid = document.createElement('div');
  mainMid.setAttribute('class','main-mid');
  
  const iconFile = document.createElement('img');
  iconFile.setAttribute('class', 'iconFileType');
  iconFile.src = `./iconimg/${type}.png`;
  
  const dottedThree = document.createElement('button');
  dottedThree.setAttribute('class', 'dottedThree');
  dottedThree.textContent = ':';
  
  const property = document.createElement('div');
  property.setAttribute('class', 'property');
  
  const folderName = document.createElement('p');
  folderName.setAttribute('class', 'FolderName');
  folderName.textContent = `${name}`;
  
  const propertyTime = document.createElement('p');
  propertyTime.setAttribute('class', 'propertyTime');
  
  propertyTime.textContent = `${time}`;
  
  const bottomOfCard = document.createElement('div');
  bottomOfCard.setAttribute('class', 'bottomOfCard');
  
  const size = document.createElement('p');
  size.setAttribute('class', 'size');
  size.textContent = `${sz}`;
  
  const sharedWith = document.createElement('p');
  sharedWith.setAttribute('class', 'sharedWith');
  sharedWith.textContent = 'people';
  cardContainer.appendChild(mainMid);
 
  mainMid.appendChild(iconFile);
  mainMid.appendChild(dottedThree);
  mainMid.appendChild(property);
 
  property.appendChild(folderName);
  property.appendChild(propertyTime);
  
  cardContainer.appendChild(bottomOfCard);
  
  bottomOfCard.appendChild(size);
  bottomOfCard.appendChild(sharedWith);
  
  return cardContainer;
}

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
    addUsingJsHtmlSnippet("workSpacePath",'example');
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
    cardInsertion.appendChild(cardInsertionHtmlSnippet('m.txt','1:00','folder','9G'))
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

//settings top bar 

//function settings(){
//	//let canvas = 
//	if (settingInsideItem.style.display === "none"){
//		//show the menu above button
//		const rect = settingEvent.getBoundingClientRect();
//		settingInsideItem.style.top = rect.bottom + 'px';
//		settingInsideItem.style.left = rect.left + 'px';
//
//		setting.style.display = 'block';
//	}else{
//		//hide the menu
//		settingInsideItem.style.display = "none";
//	}
//
//}
//

ConnectEvent();
workspaceEvent.addEventListener('click',WorkspaceEvent);

connectEvent.addEventListener('click',ConnectEvent);

cloudsEvent.addEventListener('click',CloudsEvent);

filesEvent.addEventListener('click',FilesEvent);

settingEvent.addEventListener('click',()=>{
  if (notificationInsideItem.style.display){
    notificationMenu.style.display = 'none';
  }
  if (profileInsideItem.style.display){
    profileMenu.style.display = 'none'
  }
  if (settingInsideItem.style.display){
    settingInsideItem.style.display = 'none';
  }
  settingInsideItem.style.display = 'block';
  
});

notificationEvent.addEventListener('click',()=>{
  if (settingInsideItem.style.display){
    settingInsideItem.style.display = 'none';
  }
  if (profileInsideItem.style.display){
    profileInsideItem.style.display = 'none'
  }

  notificationInsideItem.style.display = 'block';
});

profileEvent.addEventListener('click',()=>{
  if (settingInsideItem.style.display){
    settingInsideItem.style.display = 'none';
  }
  if (notificationInsideItem.style.display){
    notificationInsideItem.style.display = 'none'
  }

  profileInsideItem.style.display = 'block';
});
const check = document.getElementsByTagName('div');
check[1].addEventListener('click',()=>{
	settingInsideItem.style.display = 'none';
	notificationInsideItem.style.display = 'none';
	profileInsideItem.style.display = 'none';
});
check[6].addEventListener('click',()=>{
settingInsideItem.style.display = 'none';
notificationInsideItem.style.display = 'none';
profileInsideItem.style.display = 'none';
});
check[8].addEventListener('click',()=>{
settingInsideItem.style.display = 'none';
notificationInsideItem.style.display = 'none';
profileInsideItem.style.display = 'none';
});



//settingEvent.addEventListener('click',()=>{
//	settings();
//});
//document.addEventListener('click',(event) =>{
//	if (!settingInsideItem.contains(event.target) && event.target !== settingEvent){
//		settingInsideItem.style.display = "none";
//	}
//});






//TODO: setting event and other check , create a setting pop up thingy
//TODO:connect color button , while loading let it show or disable it ,do something with password thingy after trying to connect
