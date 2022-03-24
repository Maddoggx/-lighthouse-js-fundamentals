let numberOfVowels = function(data) {
  var vowelCount = "";
    for (i = 0; i < data.length; i++){
      if (data[i] === "a" || data[i] === "e" || data[i] === "i"
       || data[i] === "o" || data[i] === "u") {
        vowelCount += data.charAt(i);
      }
    }
  return vowelCount;
  }

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));