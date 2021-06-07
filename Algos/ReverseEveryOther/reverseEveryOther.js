//My solution
function reverse(str) {
    let arr = str.trim().split(' ');
    
    for(i = 1; i < arr.length; i += 2) {
        arr[i] = arr[i].split('').reverse().join('');
    };

    return arr.join(' ').trim();
};

//Best practice solutions
function reverse(string) {
    return string
      .split` `
      .map((w, i) => i & 1 ? [...w].reverse().join`` : w)
      .join` `
      .trim();
};

function reverse(str){
    return str.split(` `).map((it, index) => {
      return index%2 !== 0 ? it.split(``).reverse().join(``) : it
    }).join(` `).trim();
};