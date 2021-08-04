function maxStr(str) {
  // freq[] used as hash table
  let freq = new Array(26);
  for (let i = 0; i < freq.length; i++) {
    freq[i] = 0;
  }

  // to store maximum frequency
  let max = -1;

  // to store the maximum occurring character
  let result = 0;

  // length of 'str'
  let len = str.length;

  // get frequency of each character of 'str'
  for (let i = 0; i < len; i++) {
    if (str[i] != " ") {
      freq[str[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    }
  }

  // for each character, where character is obtained by
  // (i + 'a') check whether it is the maximum character
  // so far and accodingly update 'result'
  for (let i = 0; i < 26; i++) {
    if (max < freq[i]) {
      max = freq[i];
      result = String.fromCharCode(i + "a".charCodeAt(0));
    }
  }

  // maximum occurring character
  return result;
}

console.log(maxStr("hello my name rico"));
