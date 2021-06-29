/*
 * @lc app=leetcode id=707 lang=typescript
 *
 * [707] Design Linked List
 */

// @lc code=start
class LLNode {
	val: number;
	next: LLNode | undefined;
  
	constructor(val: number) {
	  this.val = val;
	  this.next = undefined;
	}
  
	setNext(node: LLNode) {
	  this.next = node;
	}
  }
  
  class MyLinkedList {
	private head: LLNode | undefined;
  
	constructor() {}
  
	get(index: number): number | undefined {
	  let curr = this.head;
	  if (!curr) return -1;
  
	  for (let i = 0; i < index; i++) {
		if (!curr?.next) return -1;
		curr = curr.next;
	  }
  
	  return curr.val;
	}
  
	addAtHead(val: number): void {
	  const newHead = new LLNode(val);
	  newHead.next = this.head;
	  this.head = newHead;
	}
  
	addAtTail(val: number): void {
	  let curr = this.head;
	  if (!curr) {
		this.addAtHead(val);
		return;
	  }
	  while (curr.next) curr = curr.next;
	  curr.next = new LLNode(val);
	}
  
	addAtIndex(index: number, val: number): void {
	  if (index === 0) {
		this.addAtHead(val);
		return;
	  }
	  let curr = this.head;
	  if (!curr) return;
	  for (let i = 0; i < index - 1; i++) {
		if (!curr.next) return;
		curr = curr.next;
	  }
	  const temp = new LLNode(val);
	  temp.next = curr.next;
	  curr.next = temp;
	}
  
	deleteAtIndex(index: number): void {
	  let curr = this.head;
	  if (!curr) return;
  
	  if (index == 0) {
		this.head = curr.next;
		return;
	  }
	  for (let i = 0; i < index - 1; i++) {
		if (!curr.next) return;
		curr = curr.next;
	  }
	  curr.next = curr.next?.next;
	}
  
	print() {
	  const store = [];
	  let curr = this.head;
	  while (curr) {
		store.push(curr.val);
		curr = curr.next;
	  }
	  console.log(store);
	}
  }

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

