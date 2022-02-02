/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let wordCountPerSentence = [];
    
    for (let i = 0; i < sentences.length; i++) {
        let eachSentence = sentences[i];
        let wordCount = eachSentence.split(' ').length;
        wordCountPerSentence[i] = wordCount;
    }

    return Math.max(...wordCountPerSentence);
};
