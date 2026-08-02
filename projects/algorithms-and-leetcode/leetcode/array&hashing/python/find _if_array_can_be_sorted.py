"""
Problem: https://leetcode.com/problems/find-if-array-can-be-sorted/description/?envType=daily-question&envId=2024-11-06
"""

class Solution:
    def countSetBits(self, n: int) -> int:
        """Helper function to count number of 1s in binary representation of a number"""
        count = 0
        while n:
            count += n & 1
            n >>= 1
        return count
    
    def canSortArray(self, nums: List[int]) -> bool:
        n = len(nums)
        
        # Get set bits count for each number
        bits = [self.countSetBits(num) for num in nums]
        
        # Keep trying to sort until no swaps are made
        while True:
            swapped = False
            
            # Try to swap adjacent elements
            for i in range(n - 1):
                # Can only swap if they have same number of set bits
                if bits[i] == bits[i + 1] and nums[i] > nums[i + 1]:
                    nums[i], nums[i + 1] = nums[i + 1], nums[i]
                    swapped = True
            
            # If no swaps were made, break the loop
            if not swapped:
                break
        
        # Check if array is sorted
        return all(nums[i] <= nums[i + 1] for i in range(n - 1))