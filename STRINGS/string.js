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
