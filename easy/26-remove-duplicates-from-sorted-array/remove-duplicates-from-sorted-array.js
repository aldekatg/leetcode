/**
   [0,0,1,1,1,2,2,3,3,4]
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0 

    let write = 1
    let read = 1

    for (read; read < nums.length; read++) {
        if (nums[read] !== nums[read - 1]) {
            nums[write] = nums[read]
            write++
        }
    }

    return write;

 }