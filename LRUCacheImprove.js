/**
 * @param {number} capacity
 */

class Node {
    constructor(k, v) {
        this.key = k;
        this.value = v;
    }
}

class DoubleList {
    constructor() {
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.pre = this.head;
        this.head.pre = null;
        this.tail.next = null;
        this.size = 0;
    }

    addFirst(node) {
        node.next = this.head.next;
        node.next.pre = node;
        node.pre = this.head;
        this.head.next = node;
    }

    remove(node) {
        node.pre.next = node.next;
        node.next.pre = node.pre;
    }

}


var LRUCache = function (capacity) {

    LRUCache.capacity = capacity;
    LRUCache.cacheSequence = new DoubleList();
    LRUCache.cacheMap = new Map();
};

// one condition there is no such key, so return -1
// another consition, the key is in the map return, and it's affecting the linkedlist too, don't forget
LRUCache.prototype.get = function (key) {

    if (LRUCache.cacheMap.get(key)) {
        let n = LRUCache.cacheMap.get(key)
        LRUCache.cacheSequence.remove(n);
        LRUCache.cacheSequence.addFirst(n);
        return n.value
    } else {
        return -1;
    }

};

// one condition we need to remove to make space for new ones coming in, so remove last from linkedlist
//another condition, we do not need to remove anything so one is map is not full capacity yet, another is repeated key, so 
// the map do not need to update but the linkedlist needs to be updated
LRUCache.prototype.put = function (key, value) {
    if (LRUCache.cacheMap.has(key)) {
        let n = LRUCache.cacheMap.get(key);
        n.value = value
        LRUCache.cacheMap.set(key, n);
        LRUCache.cacheSequence.remove(n);
        LRUCache.cacheSequence.addFirst(n);
    } else {
        let n = new Node(key, value);
        LRUCache.cacheMap.set(key, n)
        LRUCache.cacheSequence.addFirst(n);
        if (LRUCache.cacheMap.size > LRUCache.capacity) {
            LRUCache.cacheMap.delete(LRUCache.cacheSequence.tail.pre.key);
            LRUCache.cacheSequence.remove(LRUCache.cacheSequence.tail.pre);
            LRUCache.cacheSequence.addFirst(n);
        }
    }
};




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
