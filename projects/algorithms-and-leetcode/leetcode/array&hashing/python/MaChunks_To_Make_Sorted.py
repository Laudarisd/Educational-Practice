"""
    Problem" You are given an integer array arr of length n that represents a permutation of the integers in the range [0, n - 1].

We split arr into some number of chunks (i.e., partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array.

Return the largest number of chunks we can make to sort the array.


def maxChunksToSorted(arr):
    max_chunks = 0
    max_so_far = 0

    for i, num in enumerate(arr):
        max_so_far = max(max_so_far, num)
        if max_so_far == i:
            max_chunks += 1

    return max_chunks
 
"""
from typing import List


class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        max_chunks = 0
        max_so_far = 0

        for i, num in enumerate(arr):
            max_so_far = max(max_so_far, num)
            if max_so_far == i:
                max_chunks += 1

        return max_chunks
        