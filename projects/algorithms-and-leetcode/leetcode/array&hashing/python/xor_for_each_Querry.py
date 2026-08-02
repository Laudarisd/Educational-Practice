"""
Problem: https://leetcode.com/problems/maximum-xor-for-each-query/


ou are given a sorted array nums of n non-negative integers and an integer maximumBit. You want to perform the following query n times:

Find a non-negative integer k < 2maximumBit such that nums[0] XOR nums[1] XOR ... XOR nums[nums.length-1] XOR k is maximized. k is the answer to the ith query.
Remove the last element from the current array nums.
Return an array answer, where answer[i] is the answer to the ith query.
"""

from typing import List


class Solution:
    def getMaximumXor(self, nums: List[int], maximumBit: int) -> List[int]:
        """
        Solving approach:
        1. Calculate the maximum XOR value for the current list
        2. Loop through the list and remove the last element
        3. Calculate the maximum XOR value for the new list
        4. Append the maximum XOR value to the result list
        5. Return the result list
        """
        result = []
        xor = 0
        for num in nums:
            xor ^= num
        for i in range(len(nums) - 1, -1, -1):
            result.append(xor ^ (2 ** maximumBit - 1))
            xor ^= nums[i]
        return result