"""
Problem:https://leetcode.com/problems/array-partition/submissions/1446396815/
"""

from typing import List

class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        """
        Solving approach:
        1. Sort the input list
        2. Loop through the list and sum every other number
        3. Return the sum
        """
        nums.sort()
        print(nums)
        print(nums[::2])
        print(sum(nums[::2]))
        return sum(nums[::2])
    
    
    
if __name__ == "__main__":
    nums = [1,4,3,2]
    sol = Solution()
    sol.arrayPairSum(nums)