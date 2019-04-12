/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if(A === "" && B) {
        return false;
    };
    if(A === B) {
        return true;
    }
    // split each string from A and B into individual letters and store into a unit called splitStrArrA and SplitStrArrB, respectively.
    
    const splitStrArrA = A.split('');
    const splitStrArrB = B.split('');
    let currPosLetter = null;
    let output = null;
    
    // take first position of splitStrArrA and save into a unit called currPosLetter    
    // take off the same letter of currPosLetter from splitStrA and add on currPosLetter to the last position of splitStrArrA
    // compare splitStrArrA and splitStrArrB
    // if they match: print TRUE
    // else print FALSE;
    
    for(var i = 0; i < A.length; i++) {
    currPosLetter = splitStrArrA.shift();
    splitStrArrA.push(currPosLetter);
        
        if(splitStrArrA.join() != splitStrArrB.join()) {
            output = false;
        } else {
            return true;
        }
    }
    return output;
};

// one liner solution
// var rotateString = function(A, B) {
//     return A.length === B.length && (A + A).includes(B);
// };