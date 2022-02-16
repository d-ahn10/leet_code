<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function findDisappearedNumbers($nums) {
        foreach ($nums as $key => $val) {
            $index = abs($val) - 1;
            $nums[$index] = abs($nums[$index]) * -1;
        }
        
        $result = [];
        
        foreach ($nums as $key => $val) {
            if ($val > 0) {
                array_push($result, $key + 1);
            }
        }
        
        return $result;
    }
}