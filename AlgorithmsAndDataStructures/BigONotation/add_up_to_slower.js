//function that gets passed a number
function addUpTo(n) {
  //start total at 0
  let total = 0;
  //loop through numbers until n, and add the number to the total
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  //return the total
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)