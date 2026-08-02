# You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

from typing import List

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        """This is a greedy programming problem."""
        max_reachable = 0
        for i in range(len(nums)):
            if i > max_reachable:
                return False
            max_reachable = max(max_reachable, i + nums[i])
        return True
    

if __name__ == "__main__":
    nums = [3, 2, 1, 0, 4]
    solution = Solution()
    print(solution.canJump(nums))