let array = []
function writeCards(arr, event) {
    for (let i = 0; i < arr.length; i++) {
    array.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    }
    return array;
}
let n = 0
function countDown(num) {
    while (num >= n) {
        console.log(num);
        num--;
    }
}
