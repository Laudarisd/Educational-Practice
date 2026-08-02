"""
Problem: https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/description/?envType=daily-question&envId=2024-11-10
"""

from typing import List
from collections import deque

class Solution:
    def shortestSubarray(self, A: List[int], K: int) -> int:
        """
        Return the length of the shortest, non-empty, contiguous subarray of A with sum at least K.
        """
        n = len(A)
        prefix_sum = [0] * (n + 1)
        for i in range(n):
            prefix_sum[i + 1] = prefix_sum[i] + A[i]
        # print(prefix_sum)
        queue = deque()
        res = n + 1
        for i in range(n + 1):
            while queue and prefix_sum[i] - prefix_sum[queue[0]] >= K:
                res = min(res, i - queue.popleft())
            while queue and prefix_sum[i] <= prefix_sum[queue[-1]]:
                queue.pop()
            queue.append(i)
        return res if res < n + 1 else -1