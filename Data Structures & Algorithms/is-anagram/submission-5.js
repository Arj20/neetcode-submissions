class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length)
        return false
        let obj = {}
        for(let i=0;i<s.length;i++){
            let limit = s[i]
            if(!obj[limit]){
                obj[limit]=1
            }else
            obj[limit]+=1
        }
        for(let i=0;i<t.length;i++){
            let limit = t[i]
            if(!obj[limit])
                    return false
                    else
                    obj[limit]-=1;
        }
        return true;
    }

     
}
