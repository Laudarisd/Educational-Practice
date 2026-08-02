"""
Given an integer n, return  true if it is a power of two. Otherwise, return false. An integer n is a power of two, if there exists an integer x such  that n == 2^x.
"""

from typing import List, Dict

class Solution:
    def isPowerOfTwo(self, n:int) -> bool:
        if n <= 0:
            return False
        if n & (n -1) == 0: # this checks if n is a power of two
            return True
        return False
    


if __name__ == "__main__":
    sol = Solution()
    print(sol.isPowerOfTwo(3))   # True

    
    
