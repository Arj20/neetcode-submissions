class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
     let left = 0;
     let right = heights.length-1;
     let max = -Infinity;
     while(left<right){
     let area = (right - left)*Math.min(heights[left],heights[right])
     
     max = Math.max(max,area)
    if(heights[left]<heights[right]){
        left++
    }
    else{
        right--
    }
     }
        return max;
    }
}
