class MyHashSet {
     arr = [];
    constructor() {
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if(!this.contains(key))
            this.arr.push(key)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        
        if(this.contains(key)){
            for(let i=0;i<this.arr.length;i++){
                if(this.arr[i]===key){
                this.arr.splice(i,1)
                break;
                }
            }
        }
        
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.arr.includes(key);     
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
