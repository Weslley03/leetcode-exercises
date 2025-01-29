
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
 
let no1 = new ListNode(1)
let no2 = new ListNode(1)
let no3 = new ListNode(2)
no1.next = no2
no2.next = no3
const listOne = no1


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let dummy = new ListNode(0)
  let curr = dummy
  let liked_list = head

  while(liked_list) {
    let next = liked_list.next ? liked_list.next : 0 
    if(liked_list.val !== next.val) {
      curr.next = new ListNode(liked_list.val) 
      liked_list = liked_list.next
      curr = curr.next 
    } else {
      liked_list = liked_list.next 
      continue
    }
  }

  return dummy.next
};

console.log(deleteDuplicates(listOne))