<?php


$test_case = [
                "0" => "dig1 8 1 5 1",
                "1" => "let1 art can",
                "2" => "dig2 3 6",
                "3" => "let2 own kit dig",
                "4" => "let3 art zero"
            ];


/**
 * @param String[] $logs
 * @return String[]
 */
function reorderLogFiles($logs) 
{
    // need to sort by second item of each string, if second item is same
    // then need to check third item of each string.
    // order alphabetically/lexicographically.
    // add dig-logs last in the same order.
    $dig_arr = [];
    $let_arr = [];
    $let_arr_v2 = [];

    foreach ($logs as $key) {

        $word_arr = explode(' ', $key);
        $let_dig_check = substr($word_arr[0], 0, 3);

        if ($let_dig_check === "dig") {
            $dig_arr[] = $key;
        } elseif ($let_dig_check === "let") {
            $let_arr[] = $key;
        } else {
            echo 'something is not right';
            echo "\n this is key: $key \n";
            exit;
        }
        // echo "\n this is let_dig_check: $let_dig_check \n";
        // exit;
    }

    for ($i = 0; $i < count($let_arr); $i++) {
        $let_arr_each1 = explode(' ', $let_arr[$i]);

        $a = $let_arr_each[1];
        $a2 = $let_arr_each[1];
        echo $a;
        exit;

        // print_r($let_arr_each);
        // exit;

        if (empty($let_arr[$i+1])) {
            $let_arr_v2[] = $let_arr[$i];
            echo "\n for loop error \n";
            break;
        }
        if ($let_arr_each[1] < $let_arr_each[1]) {
            $let_arr_v2[] = $let_arr[$i];
        } else {
            $let_arr_v2[] = $let_arr[$i];
        }
    }
    print_r($let_arr);
    print_r($let_arr_v2);
    echo "\n work done \n";
    exit;
}


reorderLogFiles($test_case);


