var addTwoNumbers = function(l1, l2) {

    let carry = 0;
    let sentinel = new ListNode(0);
    let first = sentinel;
    
    while(l1 !== null || l2 !== null || carry === 1) {
        let x = (l1==null?0:l1.val)
        let y = (l2==null?0:l2.val) 
        
        let digit = ( x + y + carry) % 10
        first.next = new ListNode(digit)
        first = first.next;
        carry = Math.floor((x + y + carry) / 10);
        l1 = (l1 == null)? null : l1.next;
        l2 = (l2 == null)? null : l2.next;
    }
    
    return sentinel.next
    
};


var addTwoNumbers = function(l1, l2) {
    let arr1 = []
    let arr2 = []
    while(l1 !== null){
        arr1.push(l1.val)
        l1 = l1.next;
    }
     while(l2 !== null){
        arr2.push(l2.val)
        l2 = l2.next;
    }
    let result = []
    let carry = 0;
    for(let i = 0, j = 0  ; i < arr1.length || j < arr2.length || carry === 1 ; i++, j++) {
        arr1[i] = arr1[i] || 0;
        arr2[j] = arr2[j] || 0;
        result.push((arr1[i] + arr2[j] + carry) % 10);
        carry = Math.floor((arr1[i] + arr2[j] + carry) / 10);
    }
    var sentinel = new ListNode(0);
    var first = sentinel;

    
    for(let i = 0; i < result.length; i++) {
        first.next = new ListNode(result[i])
        first = first.next;
    }
    return sentinel.next
};



var addTwoNumbers = function(l1, l2) {
    let arr1 = []
    let arr2 = []
    while(l1 !== null){
        arr1.push(l1.val)
        l1 = l1.next;
    }
     while(l2 !== null){
        arr2.push(l2.val)
        l2 = l2.next;
    }
    let carry = 0;
    var sentinel = new ListNode(0);
    var first = sentinel;
    
    for(let i = 0, j = 0  ; i < arr1.length || j < arr2.length || carry === 1 ; i++, j++) {
        arr1[i] = arr1[i] || 0;
        arr2[j] = arr2[j] || 0;
        first.next = new ListNode((arr1[i] + arr2[j] + carry) % 10)
        first = first.next;
        carry = Math.floor((arr1[i] + arr2[j] + carry) / 10);
    }
    
    return sentinel.next
    
};
