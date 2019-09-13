<?php
/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */
class Solution {

    /**
     * @param ListNode $head
     * @return ListNode
     */
    function middleNode($head) {
        
        $ctr = 0;
        $new_head = $head;
        
        while ($head) {
            $ctr++;
            $head = $head->next;
        }
        
        $middle_num = floor($ctr / 2);

        for ($i = 0; $i < $middle_num; $i++) {
            $new_head = $new_head->next;
        }
        
        return $new_head;
        
    }
}
