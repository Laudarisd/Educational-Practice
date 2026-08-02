"""
Problem: https://leetcode.com/problems/two-sum/description/
"""
from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Create a list to store the index of the numbers
        index_list = []
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if nums[i] + nums[j] == target:
                    index_list.append(i)
                    index_list.append(j)
                    return index_list
                

# Test Cases
nums = [2,7,11,15]
target = 9
sol = Solution()
print(sol.twoSum(nums, target)) # Output: [0,1]


