"""
Problem: https://leetcode.com/problems/distribute-candies/description/
"""

from typing import List


class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        """
        Given an integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.
        """
        return min(len(set(candyType)), len(candyType) // 2)