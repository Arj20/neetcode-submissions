class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        
        let si = s.toLowerCase().split(' ').join('').replace(/[^a-zA-Z0-9\s]/g, "");

        let l =0;
        let r = si.length-1;
        console.log(si)
        while(l<r){
            if(si[l]!==si[r])
            return false;
            l++;
            r--;
        }
        return true;
    }
}
