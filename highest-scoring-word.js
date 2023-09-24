function highestScoringWord(str) {
  const formatted = str.toLowerCase().split(" ");
  let wordArray = [];
  for (let i = 0; i < formatted.length; i++) {
    wordArray.push(formatted[i]);
  }
  const countObject = {};
  let score = 0;
  for (const word of wordArray) {
    for (let i = 0; i < word.length; i++) {
      score += word[i].charCodeAt() - 96;
      countObject[word] = score;
    }
    score = 0;
  }
  const allScore = Object.values(countObject);
  const maxNumber = Math.max(...allScore);
  console.log(countObject);
  return Object.keys(countObject).find((key) => countObject[key] === maxNumber);
}

module.exports = highestScoringWord;
