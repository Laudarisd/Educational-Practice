"""
Problem: https://leetcode.com/problems/next-greater-element-i/description/
"""

from typing import List


class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        # Create a dictionary to store the next greater element for each element in nums2
        next_greater = {}
        stack = []
        for num in nums2:
            while stack and stack[-1] < num:
                next_greater[stack.pop()] = num
            stack.append(num)
        
        # Get the next greater element for each element in nums1
        return [next_greater.get(num, -1) for num in nums1]