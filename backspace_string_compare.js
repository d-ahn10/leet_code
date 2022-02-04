/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let newStrA = findHashTagAndRemove(s);
    let newStrB = findHashTagAndRemove(t);
    
    return (newStrA === newStrB);
    
};

var findHashTagAndRemove = function(str) {
    const newStr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '#') {
            newStr.pop();
        } else {
            newStr.push(str[i]);
        }
    }
    return newStr.join('');  
}
