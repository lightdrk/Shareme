const array = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '*',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '$',
    '%', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';','#', 
    '&', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '!', '@',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
let password = ''
function pass(){  
    for (let i = 0; i<=86;i++){
        password = password + array[Math.floor(Math.random()*86)];
    }
    return password;
}

exports.pass = pass;