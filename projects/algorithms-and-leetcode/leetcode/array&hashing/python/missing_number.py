"""
Probelm: https://leetcode.com/problems/missing-number/description/
"""

from typing import List


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        # Get the lnegth of the list
        n = len(nums)
        print(f"n: {n}")
        # Get the sum of the list
        sum_nums = sum(nums)
        print(f"sum_nums: {sum_nums}")
        # Get the sum of the list from 0 to n
        sum_n = n * (n + 1) // 2
        print(f"sum_n: {sum_n}")
        # return the difference
        return sum_n - sum_nums
    
    
    
if __name__ == '__main__':
    s = Solution()
    print(s.missingNumber([3, 0, 2]))  # 2