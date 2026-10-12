class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const res = new Map()
        for (let num of nums){
            if(res.has(num)){
                return true
            }else{
                res.set(num)
            }
        }

        return false
    }
}
