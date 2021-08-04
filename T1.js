// function to reverse a vowel;
/*
1/ make a helper function that will check and return all the vowels(a,e,i,o,u), lower case and upper case.

*/

function checkVowels(c) {
  return (
    c == "a" ||
    c == "A" ||
    c == "e" ||
    c == "E" ||
    c == "i" ||
    c == "I" ||
    c == "o" ||
    c == "O" ||
    c == "u" ||
    c == "U"
  );
}

//2. initiate function to reverse the vowel;
// first make a counter , for the checking each vowel;
// then store the vowels separately

function reverseVowel(word) {
  // make vowel count
  let count = 0;
  //split each vowels in a sentence
  let str = word.split("");
  //set the vowel to an empty string
  let vowel = "";

  // iterate thru the sentence or word
  for (let i = 0; i < str.length; i++) {
    // check if there's a vowel in that word or sentence you just iterated over it, using the helper function
    if (checkVowels(str[i])) {
      // increment the count of the vowel ;
      count++;
      vowel += str[i];
    }
  }

  //now, reverse all the possible vowels in the string word or sentence.
  for (let i = 0; i < str.length; i++) {
    if (checkVowels(str[i])) {
      str[i] = vowel[count--];
    }
  }

  return str.join("");
}

console.log(reverseVowel("san francisco"));

const checkingVowels = (c) =>
  c == "a" ||
  c == "A" ||
  c == "e" ||
  c == "E" ||
  c == "i" ||
  c == "I" ||
  c == "o" ||
  c == "O" ||
  c == "u" ||
  c == "U";

const reverseVowels = (word) => {
  let count = 0;
  let splitWord = word.split("");
  let vowel = "";

  for (let i = 0; i < splitWord.length; i++) {
    if (checkingVowels(splitWord[i])) {
      count++;
      vowel += splitWord[i];
    }
  }

  for (let i = 0; i < splitWord.length; i++) {
    if (checkingVowels(splitWord[i])) {
      splitWord[i] = vowel[count--];
    }
  }

  return splitWord.join("");
};

const sentence = "san francisco";

console.log(reverseVowels(sentence));
