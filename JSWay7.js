// CHAPTER 7
// Write a program that:
/* Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
- Shows each array element using a for loop.
- Adds the "D'Artagnan" value to the array.
- Shows each array element using the forEach() method.
- Remove poor Aramis.
- Shows each array element using a for-of loop. */

// SOLUTION:

let musketeers = ["Athos", "Porthos", "Aramis" ];
    for (let i = 0; i < musketeers.length; i++){
        console.log(musketeers)
    }

musketeers.push("D'Artagnan");

musketeers.forEach(myElement => {
    console.log(musketeers)
  });

  musketeers.splice(2, 1);

  for (const myElement of musketeers) {
    console.log(musketeers)
  };
  

// CHAPTER 7
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

// SOLUTION:

// Laughing at myself...
// I attempted to make an entire elaborate function and then facepalm, its so much more simple than that! haha!
// Just add it together and throw it in a console.log. Get it together Jamie.
// Probably the better pracitce would be creating an actual program though that doesn't have limits like my console.log does

//OPTION 1:

const values = [3, 11, 7, 2, 9, 10];
console.log(values[0] + values[1] + values[2] + values[3] + values[4] + values[5]);

// OPTION 2:

values.forEach(value => {
    sum += value;
  });

// CHAPTER 7
// Write a program that creates the following array, then calculates and shows the array's maximum value.

// SOLUTION:

const values1 = [3, 11, 7, 2, 9, 10];

let maximum = values[0];

// First index is 1 since max is initialized with value at index 0
for (let i = 1; i < values.length; i++) {
  if (values[i] > maximum) {
    maximum = values[i];
  }
}

console.log(maximum);



