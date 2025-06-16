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
            result.unshift(nums[right] ** 2)
            right--
        } else {
            result.unshift(nums[left] ** 2)
            left++
        }
    }
    return result

};