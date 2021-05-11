//My Solution
function titleCase(title, minorWords) {
    if(title === '') return '';

    let minorArr = minorWords.toLowerCase().split(' ');
    let titleArr = title.toLowerCase().split(' ');
    let result = [];
    for(i = 0; i < titleArr.length; i++) {
        if(i === 0 || (!minorArr.includes(titleArr[i]))) {
            result.push(titleArr[i].charAt(0).toUpperCase() + titleArr[i].slice(1));
        } else {
            result.push(titleArr[i]);
        }
    }
    return result.join(' ');
};

//Best solutions unavailble due to issues with kata testing