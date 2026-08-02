"""
Problem: https://leetcode.com/problems/single-number/description/
"""


from typing import List


class  Solution:
    def singleNumber(self, nums: List[int]) -> int:
        result = 0
        # Using XOR operation
        for num in nums:
            result ^= num # XOR operation is the one that will cancel out the same numbers
        return result
    
    
    
    
if __name__ == "__main__":
    sol = Solution()
    print(sol.singleNumber([2, 2, 1]))  # 1
    print(sol.singleNumber([4, 1, 2, 1, 2]))  # 4
    