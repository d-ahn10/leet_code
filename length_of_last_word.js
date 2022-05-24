var lengthOfLastWord = function(s) {
    const words = s.split(' ');
    for (let i = words.length - 1; i >= 0; i--) {
        let lastWord = words.pop();
        if (lastWord.length > 0) {
            return lastWord.length;
        }
    }
    return false;
};
