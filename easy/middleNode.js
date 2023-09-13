/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slw_ptr = head;
    let fst_ptr = head;
  
    if(head!== null){
      while(fst_ptr!== null &&  fst_ptr.next !== null){
        slw_ptr = slw_ptr.next;
        fst_ptr = fst_ptr.next.next
      }
    return slw_ptr;
  
    }
  
  };

