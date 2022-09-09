// Write your code here!
const main = document.getElementById("main");
main.remove("main");

const newHeader = document.createElement('h1');
newHeader.id = "victory";
document.body.appendChild(newHeader);
newHeader.textContent = 'YOUR-NAME is the champion';





