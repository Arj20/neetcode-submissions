class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        if(!numbers.length)
        return
        for(let i=0;i<numbers.length;i++){
            let compliment = target - numbers[i]
            if(numbers.includes(compliment) && compliment!==numbers[i])
            return [i+1,numbers.indexOf(compliment)+1]
        }
    }
}
