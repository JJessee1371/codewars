//My solution
var number = function(busStops){
    // Good Luck!
    let remaining = 0;
    busStops.forEach(arr => {
      remaining += arr[0];
      remaining -= arr[1];
    });
    return remaining;
}

//Best practices
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

