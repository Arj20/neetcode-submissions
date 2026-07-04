class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const obj = {}
        for (let i=0;i<nums.length;i++){
           if(obj[nums[i]]!==undefined){
            obj[nums[i]]+=1
           }
           else
           obj[nums[i]] =1
        }

        return Object.entries(obj).sort((a,b)=>b[1]-a[1])[0][0]

        // let max = -Infinity
        // let maxNum = -Infinity
        // for(let key in obj){
        //     if(obj[key]>max){
        //         max = obj[key]
        //         maxNum = key
        //     }
        // }
        // return maxNum
    }
}
