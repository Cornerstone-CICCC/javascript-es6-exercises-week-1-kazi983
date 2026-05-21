/*

Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"

Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

const shirtWidth = 23;    // size L (large)
const shirtLength = 30;   // size L (large)
const shirtSleeve = 8.71; // size L (large)

Then print L to the console. 

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. For example, if...

const shirtWidth = 18; // size S (small)
const shirtLength = 29; // size M (medium)
const shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.

*/

const shirtWidth = 18; // size S (small)
const shirtLength = 29; // size M (medium)
const shirtSleeve = 8.47; // size M (medium)

let sizeWidth =
  shirtWidth >= 28
    ? '3XL'
    : shirtWidth >= 26
      ? '2XL'
      : shirtWidth >= 24
        ? 'XL'
        : shirtWidth >= 22
          ? 'L'
          : shirtWidth >= 20
            ? 'M'
            : shirtWidth >= 18
              ? 'S'
              : 'N/A';
              
let sizeLength =
  shirtLength >= 34
    ? '3XL'
    : shirtLength >= 33
      ? '2XL'
      : shirtLength >= 31
        ? 'XL'
        : shirtLength >= 30
          ? 'L'
          : shirtLength >= 29
            ? 'M'
            : shirtLength >= 28
              ? 'S'
              : 'N/A';

let sizeSleeve =
  shirtSleeve >= 10.13
    ? '3XL'
    : shirtSleeve >= 9.63
      ? '2XL'
      : shirtSleeve >= 8.88
        ? 'XL'
        : shirtSleeve >= 8.63
          ? 'L'
          : shirtSleeve >= 8.38
            ? 'M'
            : shirtSleeve >= 8.13
              ? 'S'
              : 'N/A';

console.log(sizeWidth + sizeLength + sizeSleeve);

if (sizeWidth === sizeLength && sizeLength === sizeSleeve) {
  console.log(sizeWidth);
} else {
  console.log('N/A');
}
