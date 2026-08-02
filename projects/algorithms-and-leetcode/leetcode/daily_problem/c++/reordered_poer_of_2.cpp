// You are given an integer n. We reorder the digits in any order (including the original order) such that the leading digit is not zero.

// Return true if and only if we can do this so that the resulting number is a power of two.


#include <iostream>
#include <string> // for string manipulation
#include <algorithm> // for sort
using namespace std;



class Solution {
    public:
    bool reorderedPowerOf2(int n) {
        // Count the frequency of each digit in the original number
        string original_count = to_string(n);
        sort(original_count.begin(), original_count.end());
        for (int i = 1; i <= 1e9; i *= 2) {
            string current = to_string(i);
            sort(current.begin(), current.end());
            if (current == original_count) return true;
        }
        return false;
    }
};