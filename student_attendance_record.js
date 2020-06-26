/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    
    const hashTable = {};
    
    let attendanceLetter = null;
    let counterL = 0;
    
    for (let strPos = 0; strPos < s.length; strPos++) {
        
        attendanceLetter = s[strPos];
        
        if (attendanceLetter === 'L') {
            counterL++;
            if (counterL > 2) {
                return false;
            }
        } else {
            counterL = 0;
        }
        
        if (hashTable[attendanceLetter]) {
            hashTable[attendanceLetter]++;
        } else {
            hashTable[attendanceLetter] = 1;
        }
        
        if (hashTable['A'] > 1) {
            return false;
        }
    }
    return true;

};
