"""
Problem: https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/description/
"""
from typing import List

class Solution:
    def maxNonOverlapping(self, nums:List[int],target:int) -> int:
        cumulative_sum = 0 # to keep track of the sum of the subarray
        sum_set = {0} # to keep track of the sum of the subarray where the sum is equal to target
        count = 0

        for num in nums:
            cumulative_sum += num # Update the cumulative sum
            # Check if the cumulative sum - target is in the sum_set
            if cumulative_sum - target in sum_set:
                count +=1
                sum_set = {0}
                cumulative_sum = 0
            else:
                sum_set.add(cumulative_sum)

        return count


