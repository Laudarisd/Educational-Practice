// Given an integer n, return  true if it is a power of two. Otherwise, return false. An integer n is a power of two, if there exists an integer x such  that n == 2^x.

#include <iostream>
using namespace std;

class Solution{
    public:
    bool isPowerOfTwo(int n) {
        if (n <= 0) return false; // Handle non-positive integers
        return (n & (n -1)) == 0; // bit manipulation , if n is a power of two, it has only one bit set in its binary representation
    }
};


int main() {
    Solution sol;
    // Test cases
    std::cout << sol.isPowerOfTwo(1) << std::endl;   // True
    std::cout << sol.isPowerOfTwo(16) << std::endl;  // True
    std::cout << sol.isPowerOfTwo(18) << std::endl;  // False
    std::cout << sol.isPowerOfTwo(0) << std::endl;   // False
    std::cout << sol.isPowerOfTwo(-2) << std::endl;  // False
}