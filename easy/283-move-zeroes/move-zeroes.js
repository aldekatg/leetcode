/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if (nums.length === 1 ) return nums

  let left = 0
  let right = 0

  for (right; right < nums.length; right++) {
    if (nums[right] !== 0) {
        [nums[right], nums[left]] = [nums[left], nums[right]]
        left++
    }
  }
  return nums
};