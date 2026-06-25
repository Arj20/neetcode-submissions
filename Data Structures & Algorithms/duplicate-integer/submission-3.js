class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {}
        for(let i=0;i<nums.length;i++){
            let element = nums[i];
            if(!obj[element])
            obj[element] = 1
else
            obj[element]+=1
            if(obj[element]>1)
            return true
        }
        return false
    }
}
