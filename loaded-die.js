function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */

  //return value
  var callCount = -1;

  return function() {
    /* your code here */

    //take the next value and look at the what is in the next index

    callCount += 1;
    return list[callCount];


  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6