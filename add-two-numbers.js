/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * 
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const listOne1 = new ListNode(2)
const listOne2 = new ListNode(4)
const listOne3 = new ListNode(3)
listOne1.next = listOne2
listOne2.next = listOne3
const listOne = listOne1

const listTwo1 = new ListNode(5)
const listTwo2 = new ListNode(6)
const listTwo3 = new ListNode(4)
listTwo1.next = listTwo2
listTwo2.next = listTwo3

const listTwo = listTwo1

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let result = new ListNode(0)
  let dummy = result
  let sum, acc = 0
  
  while(l1 || l2) {
    sum = acc

    if(l1) {
      sum += l1.val
      l1 = l1.next
    }

    if(l2) {
      sum += l2.val
      l2 = l2.next
    }

    acc = Math.floor(sum/10)
    dummy.next = new ListNode(sum%10) 
    dummy = dummy.next
  }
  
  return result.next
};

//l1 = [2,4,3], l2 = [5,6,4]
console.log(addTwoNumbers(listOne, listTwo)) 