"""
Problem: https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/description/?envType=daily-question&envId=2024-11-20
"""


from typing import List, Dict



class Solution:
    def takeCharacters(self, s: str, k: int) -> int:
        from collections import Counter

        # Step 1: Count characters and check feasibility
        count = Counter(s)
        if any(count[char] < k for char in "abc"):
            return -1
        
        # Step 2: Use sliding window to maximize valid substring
        n = len(s)
        required = {char: count[char] - k for char in "abc"}  # Characters allowed in the middle
        left = 0
        window_count = {"a": 0, "b": 0, "c": 0}
        max_window = 0
        
        for right in range(n):
            # Add character to window
            window_count[s[right]] += 1
            
            # Shrink the window if it exceeds the allowed characters
            while any(window_count[char] > required[char] for char in "abc"):
                window_count[s[left]] -= 1
                left += 1
            
            # Update the max window size
            max_window = max(max_window, right - left + 1)
        
        # Step 3: Minimum moves = total length - max valid window size
        return n - max_window
