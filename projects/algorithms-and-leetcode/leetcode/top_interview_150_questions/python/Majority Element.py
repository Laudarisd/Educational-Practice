"""
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array
"""

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count = 0  # Initialize count for candidate
        candidate = 0  # Initialize candidate (can be any value initially)
        
        for num in nums:  # Iterate through each number in the array
            if count == 0:  # If count is 0, choose current number as candidate
                candidate = num
            count += 1 if num == candidate else -1  # Increment if same as candidate, else decrement
        
        return candidate  # Return the majority element

