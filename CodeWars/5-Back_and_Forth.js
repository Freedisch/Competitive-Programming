function arrange(s) {
  // your code here
  //The whole idea is to move the index of your array and simulate a reverse function.
  let array = [];
  let firstCount = 0;
  let lastCount = s.length - 1;
  while (firstCount < lastCount) {
    if (firstCount % 2 === 0) {
      array.push(s[firstCount]);
      array.push(s[lastCount]);
    } else {
      array.push(s[lastCount]);
      array.push(s[firstCount]);
    }
    //back and forth procedure
    firstCount++;
    lastCount--;
  }
  if (firstCount === lastCount) array.push(s[firstCount]);
  return array;
}
