//My solution
function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const textArr = text.toLowerCase().split('');
    let result = [];

    textArr.filter(char => alphabet.indexOf(char) !== -1).forEach(char => {
        result.push(alphabet.indexOf(char) + 1);
    });
    return result.join(' ');
};

//Best practice solutions
function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map((c) => c.charCodeAt() - 64)
      .join(' ');
};

function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++){
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length-1);
};