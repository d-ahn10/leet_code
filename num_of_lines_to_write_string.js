/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    let numOfLines = 1;
    let numOfUnits = 0;
    let outputArr = [];
    let currChar = null;
    
    for(let i = 0; i < S.length; i++) {
        currCharIndex = widths[S.charCodeAt(i) - 97];
        numOfUnits += currCharIndex;
        if(numOfUnits > 100) {
            numOfLines++;
            numOfUnits = currCharIndex;
        }
    }
    outputArr.push(numOfLines, numOfUnits);
    return outputArr;
};