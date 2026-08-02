"""
Problem: https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/description/?envType=daily-question&envId=2024-11-16
"""

from typing import List, Dict

class Solution:
    def resultsArray(self, nums: List[int], k: int) -> List[int]:
        if k == 1:
            return nums

        result = []
        left = 0

        consecutive_count = 1
        for r in range(len(nums)):
            if r > 0 and nums[r-1] + 1 == nums[r]:
                consecutive_count += 1

            if r - left + 1 > k:
                if nums[left] + 1 == nums[left+1]:
                    consecutive_count -= 1

                left += 1

            if r - left + 1 == k:
                if consecutive_count == k:
                    result.append(nums[r])

                else:
                    result.append(-1)
        return result
        