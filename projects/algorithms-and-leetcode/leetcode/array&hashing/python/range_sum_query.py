"""
Problem: https://leetcode.com/problems/range-sum-query-immutable/description/
"""

from typing import List


class NumArray:
    def __init__(self, nums: List[int]):
        self.prefix_sum = [0]
        for i in range(len(nums)):
            self.prefix_sum.append(self.prefix_sum[-1] + nums[i])

    def sumRange(self, i: int, j: int) -> int:
        return self.prefix_sum[j+1] - self.prefix_sum[i]
    