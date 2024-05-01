// github.com/RodneyShag

import java.util.Scanner;
import java.util.Arrays;

//  Time Complexity: O(N + T)
// Space Complexity: O(N + T)
public class Solution {
    public static void main(String[] args) {
        /* Save input */
        Scanner scan = new Scanner(System.in);
        int T = scan.nextInt();
        int [] testcase = new int[T];
        for (int i = 0; i < T; i++) {
            testcase[i] = scan.nextInt();
        }
        
        /* Calculate answers for all T testcases */
        int maxCycles = Arrays.stream(testcase).max().getAsInt();
        int [] cache = new int[maxCycles + 1]; // cache is crucial to increase runtime
        cache[0] = 1;
        for (int i = 1; i <= maxCycles; i++) {
            if (i % 2 == 1) {
                cache[i] = cache[i-1] * 2;
            } else {
                cache[i] = cache[i-1] + 1;
            }
        }

        /* Print answers */
        for (int i = 0; i < T; i++) {
            System.out.println(cache[testcase[i]]);
        }
    }
}
