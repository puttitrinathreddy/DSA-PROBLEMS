/*
------------------------------------ 242. Valid Anagram ----------------------------------------------

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

============================================= SOLUTION ===============================================
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  let map = {};
  for (let i = 0; i < s1.length; i++) {
    let letters = s1[i];

    if (!map[letters]) {
      map[letters] = 1;
    } else {
      map[letters]++;
    }
  }

  for (let j = 0; j < s2.length; j++) {
    let letters = s2[j];
    if (map[letters] === undefined || map[letters] === -1) {
      return false;
    } else {
      map[letters]--;
    }
  }
  return true;
}
const result = isAnagram("Hello", "elolh");
console.log(result);


*/
