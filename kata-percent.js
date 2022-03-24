const urlEncode = function(text) {
  let url = "";
  // Loop through text if it doesn't begin with " "
  if (text[0] !== " ") {
    for (let i = 0; i < text.length; i++) {
      text[i] === " " ? url += "%20" : url += text[i];
    }
    return url;
  }
  // Loop through text starting from 2nd character if it begins with " "
  for (let i = 1; i < text.length - 1; i++) {
    text[i] === " " ? url += "%20" : url += text[i];
  }
  return url;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));