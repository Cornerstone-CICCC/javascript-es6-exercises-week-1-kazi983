/*
Write a series of conditional statements that:

- Prints "not a group" if musicians is less than or equal to 0
- Prints "solo" if musicians is equal to 1
- Prints "duet" if musicians is equal to 2
- Prints "trio" if musicians is equal to 3
- Prints "quartet" if musicians is equal to 4
- Prints "this is a large group" if musicians is greater than 4

*/

const musiciansNum = 3;

if (musiciansNum <= 0) {
  console.log('not a group');
} else if (musiciansNum === 1) {
  console.log('solo');
} else if (musiciansNum === 2) {
  console.log('duet');
} else if (musiciansNum === 3) {
  console.log('trio');
} else if (musiciansNum === 4) {
  console.log('quartet');
} else {
  console.log('this is a large group');
}
