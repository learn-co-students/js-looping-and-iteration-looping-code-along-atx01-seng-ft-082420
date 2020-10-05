// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"]
const event = "birthday"
function writeCards(array, string) {
    var messages = []
    for (let i = 0; i < array.length; i++) {
        messages.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return messages;
}

writeCards(names, event);



 
function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}
countDown(10);
