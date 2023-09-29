"use strict";
/*

--------------------------------------- 1. Two Sum :- ------------------------------------------

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]



======================================= SOLUTION ===============================================

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [nums[i], nums[j]];
      }
    }
  }
const findIndicesForSum = function (nums, target) {
  let left = 0;
  let right = 1;

  while (left < nums.length - 1) {
    const sum = nums[left] + nums[right] - target;

    if (sum === 0) {
      return [left, right];
    }

    // If the sum is less than the target, move the right pointer to the right.
    if (sum < 0) {
      right++;
    }
    // If the sum is greater than the target, move the left pointer to the right.
    else {
      left++;
      right = left + 1;
    }

    // If the right pointer reaches the end, move the left pointer to the next element.
    if (right >= nums.length) {
      left++;
      right = left + 1;
    }
  }

  // If no such pair is found, return an empty array or some other appropriate value.
  return [];
};

console.log(findIndicesForSum([3, 2, 4], 6));

---------------------------------200. NUMBER OF ISLANDS-----------------------------------------

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

======================================= SOLUTION ===============================================
const numIslands = function (grid) {
  let countIslands = 0;

  for (let rowIdx in grid) {
    for (let colIdx in grid[rowIdx]) {
      if (grid[rowIdx][colIdx] === "1") {
        countIslands++;
        convert(parseInt(rowIdx), parseInt(colIdx), grid);
      }
    }
  }

  return countIslands;
};

// converting the surrounding to water using a function

const convert = function (rowIn, colIn, grid) {
  if (
    grid[rowId] === undefined ||
    grid[rowIn][colIn] === undefined ||
    grid[rowIn][colIn] === "0"
  )
    return;

  grid[rowIn][colIn] = "0";
  
  convert(rolIn + 1, colIn, grid);
  convert(rolIn - 1, colIn, grid);
  convert(rolIn, colIn + 1, grid);
  convert(rolIn, colIn - 1, grid);
};

----------------------------------53. Maximum Subarray :---------------------------------------

Given an integer array nums, find the 
subarray with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

======================================= SOLUTION ===============================================

const maxSubArray = function (nums) {
  let solution = nums[0];

// this loop is to check if the current index element is greater or the sum between (current index element and the previous index element) is greater with the help of Math.maxResult()

  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.maxResult(nums[i], nums[i] + nums[i - 1]);

    // And same method is used to save the solution this time the comparison is between the current solution and current index element
    if(nums[i] > solution){
      solution = nums[i]
    }
  }
  return solution;
};

const maxSubArray = function(nums){
  let maxResult = nums[0];
  let sum = 0;
  for(let i = 0; i< nums.length;i++){
    sum +=nums[i];
    if(sum>maxResult){
      maxResult= sum;
    }
    if(sum<0){
      sum = 0;
    }
    return maxResult;
  }
}

------------------------121. Best Time to Buy and Sell Stock------------------------------------

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the maxResult profit = 0.

==========================================SOLUTION==============================================
const maxProfit = function (prices) {
  let buy = prices[0];
  prices[0] = 0;
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
      prices[i] = 0;
    } else {
      profit = Math.maxResult(prices[i] - buy, profit);
    }
  }
  return profit;
};

**************************************** BETTER ONE ********************************************
const maxProfit = function (prices) {
  let profit = 0;
  let minPrice = prices[0];
  for(let i =0;i<prices.length;i++){
      minPrice = Math.min(prices[i],minPrice);
      profit = Math.maxResult(profit, prices[i]-minPrice)
  }
  return profit;
};

------------------------------------136. Single Number-----------------------------------------

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1

Example 2:

Input: nums = [4,1,2,1,2]
Output: 4

Example 3:

Input: nums = [1]
Output: 1

=================================== SOLUTION USING XOR() =======================================

const singleNumber = function(nums){
  let result = 0;
  for(let i =0; i< nums.length;i++){
    result ^= nums[i];
  }
  return result;
}

--------------------------------------283. Move Zeroes :----------------------------------------

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]

========================================= SOLUTION =============================================

const moveZeros = function (nums) {
  let placeNonZeros = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[placeNonZeros] = nums[i];
      placeNonZeros++;
    }
  }
  for (let i = placeNonZeros; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
--------------------------------- 217. Contains Duplicate --------------------------------------

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

=========================================== SOLUTION ===========================================

*** FIRST WITH TIME AND SPACE COMPLEXITY OF O(N) ***

  function findDuplicates(nums) {
  let duplicates = {};
  for (let i = 0; i < nums.length; i++) {
    if (duplicates[nums[i]] === undefined) {
      duplicates[nums[i]] = nums[i];
    } else {
      return true;
    }
  }
  return false;
}

*** SECOND WITH SPACE COMPLEXITY DECREASED TO NONE BUT TIME COMPLEXITY INCREASED ***

function containsDuplicate(nums) {
  nums.sort((a, b) => {
    return b - a;
  });

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) {
      return true;
    }
  }
  return false;
}


------------------------- 238. Product of Array Except Self:- ----------------------------------

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

======================================= SOLUTION ===============================================

function productExceptSelf(nums) {
  let result = new Array(nums.length);
  //looping over the first part 

  let leftIdx = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftIdx;
    left *= nums[i];
  }
  // Looping over the second part
  let rightIdx = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightIdx;
    rightIdx *= nums[i];
  }

  return result;
}


---------------------------- 152. Maximum Product Subarray -------------------------------------

Given an integer array nums, find a 
subarray
 that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

======================================== SOLUTION ==============================================

const maxProduct = function(nums){
  let min = nums[0],
      tmax = nums[0],
      maxResult = nums[0];
    
  for(let i=1; i< nums.length;i++){
    const temp = tmax;

    tmax = Math.maxResult(nums[i]*tmax, nums[i], nums[i]*min);
    min = Math.min(temp*nums[i],nums[i], min*nums[i]);

    maxResult = Math.maxResult(maxResult,tmax);
  }
  return maxResult;
}

--------------------------- 153. Find Minimum in Rotated Sorted Array --------------------------

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

 

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 

===================================== SOLUTION =================================================

const findMin = function (nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) {
      if (nums[0] > nums[1]) {
        return nums[1];
      } else return nums[0];
    }
  
    const midIndex = Math.floor(nums.length / 2),
      midValue = nums[midIndex],
      lastValue = nums[nums.length - 1];
  
    if (midValue > lastValue) {
      return findMin(nums.splice(midIndex));
    } else {
      return findMin(nums.splice(0, midIndex + 1));
    }
  };

-------------------------- 33. Search in Rotated Sorted Array ----------------------------------

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index 

k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums

[0], nums[1], ..., nums[k-1]] (0-indexed). 

For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:

Input: nums = [1], target = 0
Output: -1

======================================== SOLUTION ==============================================

const search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) return mid;

    if (
      (nums[mid] > nums[right] && target > nums[right] && target < nums[mid]) ||
      (nums[mid] < nums[right] &&
        !(target > nums[mid] && target <= nums[right]))
    ) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

----------------------------------------- 15. 3Sum ---------------------------------------------

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

====================================== SOLUTION ================================================

const threeSum = function (nums) {
  let [solution, left, right] = [[], 0, nums.length - 1];
  if (nums.length < 3) return solution;
  nums.sort((a, b) => a - b);

  for (let [index, number] of nums.entries()) {
    if (number > 0) return solution;
    if (number === nums[index - 1]) continue;

    left = index + 1;
    right = nums.length - 1;
    let temp = 0;

    while (left < right) {
      temp = number + nums[left] + nums[right];

      if (temp === 0) {
        solution.push([number, nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (temp > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return solution;
};

------------------------------- 11. Container With Most Water ----------------------------------

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1

======================================== SOLUTION ==============================================
function maxArea(height) {
  let l = 0,
    r = height.length - 1,
    max = 0;
  while (l < r) {
    let length = Math.min(height[l], height[r]);
    let width = r - l;
    let volume = length * width;
    max = Math.max(max, volume);

    height[l] >= height[r] ? r-- : l++;
  }
  return max;
}

*/
