/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {return false;}
    
    let firstStrRecord = {};
    let secondStrRecord = {};
    firstStrRecord = strRecorder(firstStrRecord, s);
    secondStrRecord = strRecorder(secondStrRecord, t);

    for (const prop in firstStrRecord) {
        if (secondStrRecord[prop] !== firstStrRecord[prop]) {
            return false;
        }
    }

    return true;
};

function strRecorder(map, word) {
    for (let i = 0; i < word.length; i++) {
        if (map.hasOwnProperty(word[i])) {
            map[word[i]]++;
        } else {
            map[word[i]] = 1;
        }
    }
    return map;
}
