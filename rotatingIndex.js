// problem:
/**Assuming you have an array.  How would you move the index by a random number */

const rotLeft = (a, d) => {
  // a = array, d = number of places it needs to be moved
// return 
// a new array where splice removed elements from index 0 to d, 
// then concat the original array (that has been spliced) with spliced elements
 return a.concat(a.splice(0,d));
};

console.log(rotLeft([1,2,3,4,5], 4));