class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       
        const n = nums.length;
        const prefix = new Array(n).fill(1);
        const suffix = new Array(n).fill(1);
        const answer = new Array(n);

        for(let i=1;i<n;i++){
            prefix[i] = prefix[i-1] * nums[i-1]
        }
    console.log(prefix)
    for(let i=n-2;i>=0;i--){
        suffix[i] = suffix[i+1] * nums[i+1] 
    }
     console.log(suffix)
     for(let i=0;i<n;i++){
         answer[i] = prefix[i] * suffix[i]
     }
        return answer;
    
    }
}
