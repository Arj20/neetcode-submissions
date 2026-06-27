class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj={}
        for(let i=0;i<nums.length;i++){
    
    if(!obj[nums[i]]){
        obj[nums[i]] = 1
    }
    else {
        obj[nums[i]]+=1
    }
    
    }
    return Object.entries(obj).sort((a,b)=>a[1]-b[1]).splice(-k).map(item=>item[0])
    }
}
