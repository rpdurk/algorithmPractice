//function that gets passed n
function addUpTo(n) {
  //math equation that obtains the same outcome.
  return n * (n + 1) / 2;
}

//check time
//performance.now() saves time since the variable has been loaded
var time1 = performance.now();
addUpTo(1000000000);
//second time should be the incremented time since the function began
var time2 = performance.now();
//prints out the time of equation
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)