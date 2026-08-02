"""
https://leetcode.com/problems/search-insert-position/
"""
from typing import List

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        i = 0 # index
        while i < len(nums): # Check if the target is greater than or equal to the current element
            if nums[i] >= target: # If it is, return the index
                return i
            i += 1
        return i