"""
Problem: https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/description/?envType=daily-question&envId=2024-11-07

"""


class Solution:
    def largestCombination(self, candidates: List[int]) -> int:
        max_count = 0
        # Iterate over each bit position (0 to 31 since we're working with 32-bit integers)
        for bit_position in range(32):
            # Counter to hold the number of candidates with the current bit set
            count_with_bit_set = 0
          
            # Iterate over the candidate numbers
            for candidate in candidates:
                # Check if the bit at the current bit position is set (1)
                if (candidate >> bit_position) & 1:
                    # If so, increment our counter
                    count_with_bit_set += 1
          
            # Update the maximum count if the current count is greater than the previously recorded maximum
            max_count = max(max_count, count_with_bit_set)
      
        # Return the maximum count of candidates that have a particular bit set
        return max_count

        