/**
 * @param {string} s
 * @return {boolean}
 */
let isNumber = function(s) {
    return /^\s*[+-]?(\d+\.\d+|\d+\.|\.\d+|\d+)(\e[+-]?\d+)?\s*$/gm.test(s);
};
