<?php

function isPalindrome($head) {
        
    $real_arr = [];
    
    while($head) {
        $real_arr[] = $head->val;
        $head = $head->next;
    }
    
    if (count($real_arr) < 2) {return true;}

    $len = count($real_arr);
    $half_len = floor($len / 2);

    for ($i = 0; $i < $half_len; $i++) {
        if ($real_arr[$i] != $real_arr[$len-$i-1]) {
            return false;
        }
    }
    
return true;
    
}

isPalindrome([1,2]); //true
