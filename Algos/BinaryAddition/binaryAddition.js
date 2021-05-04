//My solution
function addBinary(a,b){
    return (a+b).toString(2)
}

//Best practices solutions
const addBinary = (a, b) => (a + b).toString(2);

function decimalToBinary(decimal){
    return (decimal >>> 0).toString(2);
  }
  
  function addBinary(a,b) {
    return decimalToBinary(a+b);
  }