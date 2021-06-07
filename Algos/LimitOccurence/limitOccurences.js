//My solution
function deleteNth(arr, n) {
    let result = [];
    
    arr.forEach(num => {
        let occurences = result.filter(item => item === num);

        if(occurences.length >= n) return;
        result.push(num);
    });
    return result;
};

//Best practice solution
function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      return cache[n] <= x;
    });
  }
