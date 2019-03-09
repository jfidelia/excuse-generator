let article = ['The','my', 'a', 'an' ];
let subject =['dog', 'aliens', 'car', 'baby'];
let action = ['chewed', 'stole', 'ran over', 'ripped' ];
const what ='my homework';
let predicate = ['slowly', 'really bad', 'viciously', 'aggresively'];

let excuse = article[Math.floor(Math.random() * 4)] + " " + subject[Math.floor(Math.random() * 4)] + " " + action[Math.floor(Math.random() * 4)] + " " + what + " " + predicate[Math.floor(Math.random() * 4)];
console.log(excuse);

document.querySelector("p").innerHTML = excuse;