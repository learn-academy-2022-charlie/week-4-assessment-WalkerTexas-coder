// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// describe("", () => {
//   it("", () => {
//     expect().toEqual()
//   })
// })

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray



describe("shuffle",()=>{
  it("takes in an array, removes the first item from the array and shuffles the remaining content.",()=>{ 
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(shuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(shuffle(colors1)).not.toEqual(expect.arrayContaining(["purple"]))
    expect(shuffle(colors1)).not.toEqual(["yellow", "blue", "pink", "green"])
    expect(shuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})


//Red 

// FAIL./ code - challenges.test.js
// shuffle
//     ✕ takes in an array, removes the first item from the array and shuffles the remaining content. (3 ms)

//   ● shuffle › takes in an array, removes the first item from the array and shuffles the remaining content.

//   ReferenceError: shuffle is not defined


// b) Create the function that makes the test pass.

// declare a function named shuffle
  // assign array as parameter
  // remove fist item in array (maybe using slice)
  // randomize the order with math randomizer and a sorting algorithm 

  // Got false positive when simply returning array input

const shuffle = (array) => {
  let sliced = array.slice(1)
  let randomized = sliced.sort(() => Math.random() - 0.5)
  console.log(randomized)
  return randomized
}


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// b) Create the function that makes the test pass.
