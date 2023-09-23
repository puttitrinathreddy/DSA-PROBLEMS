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

// this loop is to check if the current index element is greater or the sum between (current index element and the previous index element) is greater with the help of Math.max()

  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);

    // And same method is used to save the solution this time the comparison is between the current solution and current index element
    if(nums[i] > solution){
      solution = nums[i]
    }
  }
  return solution;
};

const maxSubArray = function(nums){
  let max = nums[0];
  let sum = 0;
  for(let i = 0; i< nums.length;i++){
    sum +=nums[i];
    if(sum>max){
      max= sum;
    }
    if(sum<0){
      sum = 0;
    }
    return max;
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
Explanation: In this case, no transactions are done and the max profit = 0.

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
      profit = Math.max(prices[i] - buy, profit);
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
      profit = Math.max(profit, prices[i]-minPrice)
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















*/
