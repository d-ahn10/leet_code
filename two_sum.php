class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        $len = count($nums);
        for ($i = 0; $i < $len; $i++) {
            for ($j = 1; $j < $len; $j++) {
                $sum_nums = $nums[$i] + $nums[$j];
                if ($sum_nums === $target && $i !== $j) {
                    return [$i,$j];
                }
            }
        }   
    }
}
