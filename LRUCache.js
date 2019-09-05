/**
 * @param {number} capacity
 */
// using sentinel circle style maybe not suitable for this situation, using head,tail can avoid some obstacles when removing nodes from
// a specific position in linkedlist, for example, problems around keep the last reference which is vwery hairy

class Node {
    constructor(i, p, n) {
        this.key = i;
        this.prev = p;
        this.next = n;
    }
}

class DoubleList {

    constructor() {
        this.sentinel = new Node(null, null, null);
        this.sentinel.prev = this.sentinel;
        this.sentinel.next = this.sentinel;
        this.last = this.sentinel;
        this.first = this.sentinel;
        this.size = 0;
    }

    addFirst(key) {
        this.sentinel.next = new Node(key, this.sentinel, this.sentinel.next);
		this.sentinel.prev = this.sentinel.next;
		// trace last when only one item in the list and then removed
		if(this.size == 0) {
			this.last = this.sentinel.next;
		}
		this.size += 1;
    }
    
    removeLast() {
        const lastKey = this.last.key
        this.last.prev.next = this.sentinel;
        this.last = this.last.prev
		this.sentinel.prev = this.last;
		this.size -= 1;
        return lastKey;
    }
    
    remove(key){
        let pointer = this.last;
        console.log("in remove function", this.sentinel)
        if(this.size == 1){
            pointer.prev.next = pointer.next;
            pointer.next.prev = pointer.prev;
            this.size -= 1;
            this.last = this.sentinel;
            return;
        }
        for(let i=0; i < this.size; i++) {
            if(pointer.key === key){
                if(i == this.size - 1){
                    this.last = this.last.prev;
                }
                pointer.prev.next = pointer.next;
	            pointer.next.prev = pointer.prev;
                this.size -= 1;
                return;
            }
            pointer = pointer.prev;
        }
    }

}


var LRUCache = function (capacity) {

    LRUCache.capacity = capacity;
    LRUCache.cacheSequence = new DoubleList();
    LRUCache.cacheMap = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */

// one condition there is no such key, so return -1
// another consition, the key is in the map return, and it's affecting the linkedlist too, don't forget
LRUCache.prototype.get = function (key) {

    if (LRUCache.cacheMap.get(key)) {
        LRUCache.cacheSequence.remove(key);
        LRUCache.cacheSequence.addFirst(key);
        // console.log("get a key affect order" + key)
        // console.log(LRUCache.cacheSequence)
        return LRUCache.cacheMap.get(key)
    } else {
        return -1;
    }

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
// one condition we need to remove to make space for new ones coming in, so remove last from linkedlist
//another condition, we do not need to remove anything so one is map is not full capacity yet, another is repeated key, so 
// the map do not need to update but the linkedlist needs to be updated
LRUCache.prototype.put = function (key, value) {
    if (LRUCache.cacheMap.has(key)) {
        // console.log("it has the key" + key)
        LRUCache.cacheMap.set(key, value);
        LRUCache.cacheSequence.remove(key);
        LRUCache.cacheSequence.addFirst(key);
    } else {
        // console.log("it did not have the key yet" + key)
        LRUCache.cacheMap.set(key, value)
        LRUCache.cacheSequence.addFirst(key);
    }

    if (LRUCache.cacheMap.size > LRUCache.capacity) {
        // console.log("when over capacity")
        const tempKey = LRUCache.cacheSequence.removeLast();
        // console.log("temp key", tempKey)
        LRUCache.cacheMap.delete(tempKey);
        // console.log(LRUCache.cacheSequence)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

//["LRUCache","put","get","put","get","get"]


// [[1],[2,1],[2],[3,2],[2],[3]]


// const cache = new LRUCache(1);
// cache.put(2, 1)
// cache.get(2)
// cache.put(3, 2)
// cache.get(2)
// cache.get(3)


//["LRUCache","put","put","get","put","get","put","get","get","get"]
//[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]

const cache = new LRUCache(1);
cache.put(1, 1)
cache.put(2, 3)
cache.get(1)
cache.put(3, 3)
cache.get(2)
cache.put(4, 4)
cache.get(1)
cache.get(3)
cache.get(4)