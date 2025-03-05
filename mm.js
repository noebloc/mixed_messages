const action =["run", "jump", "swim", "dance", "sing", "write", "read", "eat", "sleep", "drive"]; 
const adjective = ["happy", "bright", "creative", "calm", "energetic", "peaceful", "colorful", "brave", "kind", "mysterious"];
const noun = ["book", "mountain", "ocean", "computer", "flower", "city", "dog", "phone", "tree", "car"];
const date = ["today", "tomorrow", "next week", "next month"];

const mixedMessage = () => 
    console.log('You will ' + action[Math.floor(Math.random() * 10)] + ' ' + adjective[Math.floor(Math.random() * 10)] + ' '+ noun[Math.floor(Math.random() * 10)] + ' ' + date[Math.floor(Math.random() * 4)] + '!');

mixedMessage();