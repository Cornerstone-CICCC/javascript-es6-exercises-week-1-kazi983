/*
Call the emotions() function so that it prints the output you see below, 
but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

function emotions(emotion, count, cb) {
  return `I am ${emotion}, ${cb(count)}`;
}

const message = emotions('happy', '2', (count) => {
  let res = '';
  for (let i = 1; i <= count; i++) {
    res += 'ha';
  }
  return res + '!';
});

console.log(message); // "I am happy, haha!"
