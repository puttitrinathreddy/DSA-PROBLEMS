function twoSum(nums, target) {
  let l = 0,
    r = 1;
  while (l <= nums.length - 1) {
    const sum = nums[l] + nums[r] - target;

    if (sum === 0) return [l, r];

    if (sum < 0) r++;
    if (sum > 0 || r >= nums.length) {
      l++;
      r = l + 1;
    }
  }
  return `not found`;

  // let map = {};

  // for (let i = 0; i < nums.length - 1; i++) {
  //   let value = nums[i];
  //   let complementPair = target - value;

  //   if (map[complementPair] !== undefined) {
  //     return [map[complementPair], i];
  //   } else {
  //     map[value] = i;
  //   }
  // }
}

console.log(twoSum([2, 4, 3, 5, 6], 10));
