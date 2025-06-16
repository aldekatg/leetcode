/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let left = 0
    let right = nums.length - 1
    let result = []

    while (right >= left) {
        if (Math.abs(nums[right]) > Math.abs(nums[left])) {
            result.unshift(Math.abs(nums[right] * nums[right]))
            right--
        } else {
            result.unshift(Math.abs(nums[left] * nums[left]))
            left++
        }
    }
    return result

};