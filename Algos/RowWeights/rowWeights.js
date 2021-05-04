//My solution
function rowWeights(array){
    //your code here
    let sum1 = 0;
    let sum2 = 0;
    let bool = true;
    for(let i = 0; i < array.length; i++) {
      (bool ? sum1 += array[i] : sum2 += array[i]);
      bool = !bool;
    };
    return [sum1, sum2];
}


//Best practice solutions
function rowWeights(array){
    let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
    let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);

    return [t1, t2]
}

function rowWeights(array){
    var arr = [0, 0];
    for (var i = 0; i < array.length; i++) {
      i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
    }
    return arr;
}