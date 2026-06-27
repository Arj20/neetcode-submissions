class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let oneStrs = "";
        for (let i = 0; i < strs.length; i++) {
            oneStrs = oneStrs + strs[i].length + "#" + strs[i];
        }
        console.log(oneStrs);
        return oneStrs;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = [];
         let i=0
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            let length = Number(str.slice(i, j));

            arr.push(str.slice(j + 1, j + 1 + length));
            i = j + 1 + length;
        }
        return arr;
    }
}
