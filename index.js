// Code your solutions in this file
function writeCards(names, birthday) {
  let card = [];
  for (let i = 0; i < names.length; i++) {
    card.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`);
  }
  return card;
}

writeCards(names, birthday);

function countDown(num) {
  let count = num;
  while (count >= 0) {
    console.log(count--);
  }
}
