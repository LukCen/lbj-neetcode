class MyHashSet {
    constructor() {
        const instance = []
        this.instance = instance
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {

        if(!this.instance.some((item) => item === key)){
                this.instance.push(key)
                return
            }
            return
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if(this.instance.some((item) => item === key)){
            this.instance.splice(this.instance.indexOf(key), 1)
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        if(this.instance.some((item) => key === item)) {
            return true
        }
        return false
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

const obj = new MyHashSet()
console.log(obj)
obj.add(0)
obj.add(1000000)
console.log(obj.contains(0))
console.log(obj.contains(1000000))