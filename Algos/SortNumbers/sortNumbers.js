//My solution
function solution(nums){
    if(nums === null || nums.length === 0) return [];
    
    return nums.sort((a, b) => {
      return a - b;
    });
}

//Best practices solutions
function solution(nums){
    return nums !== null ? nums.sort(function(a,b){return a-b}) : [];
}

function solution(nums){
    return (nums || []).sort(function(a, b){
      return a - b
    });
}