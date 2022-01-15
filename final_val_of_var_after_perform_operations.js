/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let answer = 0;
    
    operations.forEach( function (operator, index) {
        if (operator === '--X' || operator === 'X--') {
            answer--;
        } else if (operator === '++X' || operator === 'X++') {
            answer++;
        }
    });
    
    return answer;
};
