class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {}

for(let i=0;i<nums.length;i++){
    let ele = nums[i];
    obj[ele] =obj[ele] ? obj[ele]=obj[ele]+1 : obj[ele] = 1
}

let arrayWanted = Object.entries(obj).sort((a,b)=>a[1]-b[1]).splice(-k)
let kelements = arrayWanted.map(item=>item[0])
return kelements
    }
}
