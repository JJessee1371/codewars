//My solution
function printerError(s) {
    // your code
  let limit = 'm'.charCodeAt(0);
  let denom = s.length;
  let errCount = 0;
  for(let i = 0; i < s.length; i++) {
    if(s.charCodeAt(i) > limit) {
      errCount++;
    }
  };
  return `${errCount}/${denom}`;
}

//Best practices
function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}

function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}