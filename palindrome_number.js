/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let reversedStr = x.toString().split('').reverse('').join('');
    let originalStr = x.toString();
    
    return (reversedStr === originalStr) ? true : false;
    
};