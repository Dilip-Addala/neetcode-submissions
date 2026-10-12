class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const result = new Map();

        for (let i = 0; i < nums.length; i++) {
            const val = nums[i];
            const complement = target - val;
            const check = result.has(complement);
            if (check) {
                return [result.get(complement), i];
            }

            result.set(val, i);
        }

        return [];
    }
}
