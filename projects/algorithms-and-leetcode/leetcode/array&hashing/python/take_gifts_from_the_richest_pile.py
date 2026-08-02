"""
Problem: https://leetcode.com/problems/take-gifts-from-the-richest-pile/description/?envType=daily-question&envId=2024-12-12
You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following:

Choose the pile with the maximum number of gifts.
If there is more than one pile with the maximum number of gifts, choose any.
Leave behind the floor of the square root of the number of gifts in the pile. Take the rest of the gifts.

Input: gifts = [25,64,9,4,100], k = 4
Output: 29

"""

from math import floor, sqrt
import heapq
from typing import List

class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        # Convert gifts to a max-heap using negative values
        gifts = [-g for g in gifts]  # Negate to simulate a max-heap
        heapq.heapify(gifts)  # Create a heap from the list
        
        for _ in range(k):
            # Extract the largest pile of gifts
            largest = -heapq.heappop(gifts)  # Negate back to get the original value
            # Calculate remaining gifts
            remaining = floor(sqrt(largest))
            # Push the remaining gifts back into the heap
            heapq.heappush(gifts, -remaining)
        
        # Calculate the total remaining gifts
        return -sum(gifts)  # Negate back to positive and sum

# Example usage
solution = Solution()
print(solution.pickGifts([25, 64, 9, 4, 100], 4))  # Output: 29
print(solution.pickGifts([1, 1, 1, 1], 4))  # Output: 4
