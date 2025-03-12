const action =["run", "jump", "swim", "dance", "sing", "write", "read", "eat", "sleep", "drive"]; 
const adjective = ["happy", "bright", "creative", "calm", "energetic", "peaceful", "colorful", "brave", "kind", "mysterious"];
const noun = ["book", "mountain", "ocean", "computer", "flower", "city", "dog", "phone", "tree", "car"];
const date = ["today", "tomorrow", "next week", "next month"];

let verb = action[Math.floor(Math.random() * 10)];
let adj = adjective[Math.floor(Math.random() * 10)];
let nou = noun[Math.floor(Math.random() * 10)];
let da = date[Math.floor(Math.random() * 4)]

let value = 0;

let buttonClick = document.getElementById('buttonClicker');

function mixMini(){
    document.getElementById("wacky").innerHTML = `You will ${verb} ${adj} ${nou} ${da}!`;
}

function mixedMessage() {
    if(value === 0){
        mixMini();
        value += 1;
        
    } else if (value === 1){
        value -= 1;
        document.getElementById("wacky").innerHTML = ' ';
        
    }
    
}



buttonClick.addEventListener('click', mixedMessage);

