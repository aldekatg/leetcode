/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if (nums.length === 1 ) return nums

  let write = 0
  let read = 0

  for (read; read < nums.length; read++) {
    if (nums[read] !== 0) {
      nums[write] = nums[read]
      write++
    }
  }

  for (let i = write; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums
};