console.log('remove duplicates from sorted list');

// change the node to ListNode and the value to val in removeDuplicates function 

function Node(value = null, next = null) {
    this.value = value;
    this.next = next;
}


function createListFromArray(arr) {
    let head, tail;

    for(let i=0; i<arr.length; i++) {
        if(!head) {
            head = new Node(arr[i]);
            tail = head;
        } else {
            tail.next = new Node(arr[i]);
            tail = tail.next;
        }
    }

    return head;
}

let inputList = createListFromArray([1,1,2,3,3]);
console.log(inputList);
console.log(removeDuplicates(inputList));

function removeDuplicates(head) {
    if(!head || !head.next) return head;

    let result , tail;
    function push(val) {
        if(!result) {
            result = new Node(val);
            tail = result;
            return;
        }
        tail.next = new Node(val);
        tail = tail.next;
    }

    let node = head;
    while(node) {
        if(node.next && node.next.value !== node.val) {
            push(node.value);
        } else if(!node.next) {
            push(node.value);
        }
        node = node.next;
    }
    return result;
}