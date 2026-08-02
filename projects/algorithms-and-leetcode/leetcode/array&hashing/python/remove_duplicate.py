"""
Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
"""
from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0

        unique_list = 0

        for i in range(1, len(nums)):
            if nums[i] != nums[unique_list]:
                unique_list += 1
                nums[unique_list] = nums[i]

        return unique_list + 1
