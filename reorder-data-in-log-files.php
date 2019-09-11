<?php


$test_case = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"];
$test_case2 =  ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"];
$test_case3 = ["j mo", "5 m w", "g 07", "o 2 0", "t q h"];

/**
 * @param String[] $logs
 * @return String[]
 */
function reorderLogFiles($logs) 
{
    $dig_arr = [];
    $let_arr = [];
    $exploded_let_arr = [];
    $sorted_let_arr = [];
    $better_sorted_arr = [];

    foreach ($logs as $key) {
        $word_arr = explode(' ', $key);
        
        if (is_numeric($word_arr[1])) {
            $dig_arr[] = $key;
        } else {
            $let_arr[] = $key;
        }
    }

    foreach ($let_arr as $key) {
        $exploded_let_arr[] = explode(' ', $key);
    }
    
    for ($i = 0; $i < count($exploded_let_arr); $i++) {
        $first_item = array_shift($exploded_let_arr[$i]);
        array_push($exploded_let_arr[$i], $first_item);
        $sorted_let_arr[] = implode(' ', $exploded_let_arr[$i]);
    }

    asort($sorted_let_arr);

    foreach ($sorted_let_arr as $key => $value) {
        $better_sorted_arr[] = $let_arr[$key];
    }

    $arr_complete = array_merge($better_sorted_arr, $dig_arr);
    return $arr_complete;
}


// reorderLogFiles($test_case); // ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
// reorderLogFiles($test_case2); // ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
reorderLogFiles($test_case3); // ["5 m w","j mo","t q h","g 07","o 2 0"]


