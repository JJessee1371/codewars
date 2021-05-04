//My solution
function smallEnough(arr, limit){
    const result = arr.filter(num => num > limit);
    return (result.length > 0 ? false : true);
}

//Best practices
function smallEnough(a, limit){
    return Math.max(...a) <= limit
}

smallEnough = (a, l) => a.every(e => e <= l)

function smallEnough(array, limit){
    return array.filter( (value) => value > limit ).length > 0 ? false : true;
}