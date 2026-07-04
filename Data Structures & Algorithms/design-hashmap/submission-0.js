class MyHashMap {
    arr = []
    constructor() {}

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
       let keyIndx = this.arr.findIndex((item,i)=>item[0]===key)
       if(keyIndx!==-1){
        this.arr[keyIndx][1] = value;
        return;
       }
       this.arr.push([key,value])
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let keyIndx = this.arr.findIndex((item,i)=>item[0]===key)
        return keyIndx!==-1 ? this.arr[keyIndx][1]:keyIndx
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let keyIndx = this.arr.findIndex((item,i)=>item[0]===key)
        if(keyIndx!==-1)
        this.arr.splice(keyIndx,1)
    }

}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
