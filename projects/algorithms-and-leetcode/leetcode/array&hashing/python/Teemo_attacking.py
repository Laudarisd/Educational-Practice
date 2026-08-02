"""
Problem:https://leetcode.com/problems/teemo-attacking/description/
"""

from typing import List

class Solution:
    def findpoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        if not timeSeries:
            return 0
        total_time = 0
        for i in range(1, len(timeSeries)): # Iterate through the time series because the first time is not affected by the poison and it starts from the second time
            total_time += min(timeSeries[i] - timeSeries[i-1], duration) # Total time is the sum of the minimum of the difference between the current and previous time and the duration
        return total_time + duration