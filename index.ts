//Concatenate two arrays without modifying the original arrays. You can use the + operator for concatenation.
const array1: number[]=[1,2,3];
const array2: number[]=[4,5,6];

const concatenatedArray: number[] = array1.concat(array2);
console.log("Original Array 1:",array1);
console.log("Original Array 2:",array2);
console.log("Concatenated Array:",concatenatedArray);