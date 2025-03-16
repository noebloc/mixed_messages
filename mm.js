const action =["run", "jump", "swim", "dance", "sing", "write", "read", "eat", "sleep", "drive"]; 
const adjective = ["happy", "bright", "creative", "calm", "energetic", "peaceful", "colorful", "brave", "kind", "mysterious"];
const noun = ["book", "mountain", "ocean", "computer", "flower", "city", "dog", "phone", "tree", "car"];
const date = ["today", "tomorrow", "next week", "next month"];

let value = 0;
let buttonClick = document.getElementById('buttonClicker');


document.getElementById('buttonClicker').onclick = function() {

    let verb = action[Math.floor(Math.random() * 10)];
    let adj = adjective[Math.floor(Math.random() * 10)];
    let nou = noun[Math.floor(Math.random() * 10)];
    let da = date[Math.floor(Math.random() * 4)];

    if(value === 0){
        document.getElementById("wacky").innerHTML = `You will ${verb} ${adj} ${nou} ${da}!`;
        document.getElementById("buttonClicker").innerHTML = 'Clear';
        value += 1;
        
    } else if (value === 1){
        value -= 1;
        document.getElementById("wacky").innerHTML = ' ';
        document.getElementById("buttonClicker").innerHTML = 'Click Me';
    }
}



