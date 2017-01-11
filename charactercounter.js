function countLetters (sentence) {
  var allLetters = {};
  for (var i = 0; i < sentence.length; i++) {
    var letter = sentence.charAt(i);
    if(allLetters[letter] === undefined) {
      allLetters[letter] = 1;
    } else {
      allLetters[letter] = allLetters[letter] + 1;
    }
  }
  return allLetters
}
var question = 'lighthouse in the house';
var finalQuestion = question.replace(/ /g,'').toLowerCase();
console.log(countLetters(finalQuestion));