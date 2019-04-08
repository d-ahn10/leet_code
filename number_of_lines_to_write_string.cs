public class Solution {
    public int[] NumberOfLines(int[] widths, string S) {
        int numOfLines = 1;
        int numOfUnits = 0;
        int[] outputArr = new int[] {0, 0};
        
        foreach( char eachLetter in S) {
            int i = (int)(eachLetter)-97;
            numOfUnits += widths[i];
            if(numOfUnits > 100) {
                numOfLines++;
                numOfUnits = widths[i];
            }
            
        }
        outputArr[0] = numOfLines;
        outputArr[1] = numOfUnits;
        return outputArr;
    }
}
