"""
Problem: https://leetcode.com/problems/minimum-array-end/description/?envType=daily-question&envId=2024-11-09
You are given two integers n and x. You have to construct an array of positive integers nums of size n where for every 0 <= i < n - 1, nums[i + 1] is greater than nums[i], and the result of the bitwise AND operation between all elements of nums is x.

Return the minimum possible value of nums[n - 1].
"""


from typing import List

class Solution:
    def minimumValueAfterDisjoints(self, n: int, x: int) -> int:
        """
        You are given two integers n and x. You have to construct an array of positive integers nums of size n 
        where for every 0 <= i < n - 1, nums[i + 1] is greater than nums[i], and the result of the bitwise 
        AND operation between all elements of nums is x. Return the minimum possible value of nums[n - 1].
        """

    


        
    


if __name__ == '__main__':
    run = Solution()
    print(run.minimumValueAfterDisjoints(3, 2))  # 2
    print(run.minimumValueAfterDisjoints(2, 5))  # 5
    # Input: n = 3, x = 4, Output: 6
    print(run.minimumValueAfterDisjoints(3, 4))  # 6