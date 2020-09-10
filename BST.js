function Node(value, left, right) {
    this.value= value;
    this.left = left;
    this.right = right;
    this
}

function BST() {
	this.root = null; // 初始节点为空根节点为空
	this.insert = function(data) { // 插入数据方法
		let n = new Node(data,null,null) // 实例化Node并传入初始化数据，左右树为赋值为空
		if(!this.root){
			this.root = n;  // 判断root是否(初始)为空如果为空则赋值为Node实例
		} else {
			let current = this.root;
			let parent;
			while(true) { // 一直循环执行代码块直到满足条件break跳出循环
				parent = current;
				if(data < current.value){// 判断要插入的数据是否大于根节点的值如果大于等于则在右树小于则在右树
					current = current.left; // 小于根节点在左树，current储存左树节点
					if(!current){ // 如果左节点为空则储存,不为空则继续while判断
						parent.left = n;
						break;
					}
				} else {
					current = current.right;
					if(!current) {
						parent.right = n;
						break;
					}
				}
			}
		}
    }

    this.getMin = () => {
        let current = this.root
        while(current.left){
            current = current.left
        }
        return current.value
    }

    this.getMax = () => {
        let current = this.root
        while(current.right){
            current = current.right
        }
        return current.value
    }
    
    this.sizeOfTree = (node) => {
        if(!node) return 0
        return 1 + this.sizeOfTree(node.left) + this.sizeOfTree(node.right);
    }

    this.heightOfTree = (node) => {
        if(!node) return 0
        return Math.max(this.heightOfTree(node.left), this.heightOfTree(node.right)) + 1
    }

    this.isFullBST = () => {
        return Math.pow(2, this.heightOfTree(this.root)) === this.sizeOfTree(this.root)
    }
}


let a = new BST()
a.insert(5)
a.insert(1)
a.insert(14)
a.insert(3)
a.insert(6)
a.insert(7)
a.insert(10)

const preOrder = (node) => {
    if(!node) return
    console.log(node.value)
    preOrder(node.left)
    preOrder(node.right)
}

const inOrder = (node) => {
    if(!node) return
    
    inOrder(node.left)
    console.log(node.value)
    inOrder(node.right)
}

const postOrder = (node) => {
    if(!node) return
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.value)
}

// console.log("Pre order")

// preOrder(a.root)

// console.log("In order")

// inOrder(a.root)

// console.log("Post order")

// postOrder(a.root)

console.log(a.sizeOfTree(a.root))
console.log(a.heightOfTree(a.root))

console.log(a.isFullBST())
console.log(a.getMin())
console.log(a.getMax())