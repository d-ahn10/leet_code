<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function findDisappearedNumbers($nums) {
        $coun = count($nums);
        $output = [];
        for ($i = 1; $i < $coun; $i++) {
            if(!array_search($i, $nums)) {
                $output[] = $i;
            }
        }
        return $output;
    }
}