// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
   let decodedStr = ""; // initialize an empty string to hold the decoded result

  for (let i = 0; i < encodedStr.length; i++) {
    // look up the character in the lookup table
    let decodedChar = lookup[encodedStr[i]];
    if (decodedChar !== undefined) {
      // if the character is in the lookup table, append the decoded value
      decodedStr += decodedChar;
    } else {
      // if the character is not in the lookup table, append it unchanged
      decodedStr += encodedStr[i];
    }
  }

  return decodedStr;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
