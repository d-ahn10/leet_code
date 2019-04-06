public class Solution {
    public int Fib(int N) {
        
        if(N < 2) {
            return N;
        }
        
        int currNum = 0;
        int nextNum = 1;
        int output = 0;
        
        for(int i = 0; i <= N - 2; i++) {
            output = currNum + nextNum; // 
            currNum = nextNum; // 
            nextNum = output;  // 
        }
        return output;
    }
}
