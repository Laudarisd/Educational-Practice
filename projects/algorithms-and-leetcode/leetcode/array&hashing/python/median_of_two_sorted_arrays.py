"""
Problem: https://leetcode.com/problems/median-of-two-sorted-arrays/description/
"""

from typing import List



class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        nums = sorted(nums1 + nums2)
        n = len(nums)
        
        print(f" check :{nums[n // 2]}")
        if n % 2 == 0:
            return (nums[n // 2] + nums[n // 2 - 1]) / 2 # n //2 gives the middle element, n//2 -1 gives the element before the middle element
        else:
            return nums[n // 2]
        
        
        
sol = Solution()
print(sol.findMedianSortedArrays([1, 3], [2]))  # 2.0

print(sol.findMedianSortedArrays([1, 2], [3, 4]))  # 2.5
