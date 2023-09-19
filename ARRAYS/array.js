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

=============









*/
