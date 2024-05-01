// github.com/RodneyShag

import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int a0 = scan.nextInt();
        int a1 = scan.nextInt();
        int a2 = scan.nextInt();
        int b0 = scan.nextInt();
        int b1 = scan.nextInt();
        int b2 = scan.nextInt();
        scan.close();
        
        int aPoints = (a0 > b0 ? 1 : 0) + (a1 > b1 ? 1 : 0) + (a2 > b2 ? 1 : 0);
        int bPoints = (a0 < b0 ? 1 : 0) + (a1 < b1 ? 1 : 0) + (a2 < b2 ? 1 : 0);
        
        System.out.println(aPoints + " " + bPoints);
    }
}
