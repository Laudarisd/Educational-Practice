"""
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
"""

from typing import List

class Solution:
    def merge(self,nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        # This is a two pointer approach
        nums1[:m] = nums2
        nums1.sort()
        return nums1