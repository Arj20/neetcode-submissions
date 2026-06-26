class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let lookup = {}
        if(s.length!==t.length)
        return false;
     for (let i = 0; i < s.length; i++) {
    let letter = s[i];

    // if letter exists, increment, otherwise set to 1
    lookup[letter]
        ? lookup[letter] += 1
        : lookup[letter] = 1;
}

for (let i = 0; i < t.length; i++) {
    let letter = t[i];

    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
        return false;
    } else {
        lookup[letter] -= 1;
    }
}

return true;

     
}
}
