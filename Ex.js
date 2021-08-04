// // write a function that determines the max occurance of charct in string

// // create empty array to store frqncy or count of a single char.

// function maxCharcterInStr(str) {
//   let frequency = new Array(26);
//   // iterate ove the frequency count and set the index of that array to be the minimun
//   for (let i = 0; i < frequency.length; i++) {
//     frequency[i] = 0;
//   }
//   //set max of character in the freqcy arry to be the last values or element in th array
//   let max = -1;

//   // store the result of the frequency count;
//   let result = 0;

//   // loop over each element in the string array
//   //get the frequency count of each character
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != " ") {
//       frequency[str[i].charCodeAt(0) - "a".charCodeAt(0)]++;
//     }
//   }

//   for (let i = 0; i < 26; i++) {
//     if (max < frequency[i]) {
//       max = frequency[i];
//       result = String.fromCharCode(i + "a".charCodeAt(0));
//     }
//   }

//   return result;
// }

// //console.log(maxCharcterInStr("Testing test"));

// function maxStr(str) {
//   let freq = [];
//   let min = 0;
//   let max = -1;
//   let result = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       console.log(`str at index i --- ${str[i]}`);
//       freq.push([str[i]]);
//       //freq[str[i]++];
//       console.log(`freq ---> ${freq}`);
//     }
//   }

//   for (let i = 0; i < freq.length; i++) {
//     if (max < freq[i]) {
//       max = freq[i];
//       result = freq[i];
//     }
//   }

//   return `result is ---> ${result}`;
// }

// console.log(maxStr("soccerrrr is the best"));

function maxC(str) {
  let myStr = str.toLowerCase();
  let freq = {};
  let max = 0;
  let maxChar = "";

  for (let char of myStr) {
    if (!freq[char]) {
      freq[char] = 1;
    } else {
      freq[char]++;
    }
  }

  for (let char in freq) {
    if (freq[char] > max) {
      max = freq[char];
      maxChar = max;
    }
  }

  return maxChar;
}
console.log(maxC("soccerrrr is the best"));
