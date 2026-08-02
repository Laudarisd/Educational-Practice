"""
#https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/description/?envType=daily-question&envId=2024-11-14
"""


from typing import List

class Solution:
    def minimizedMaximum(self, n: int, quantities: List[int]) -> int:
        # Binary search bounds
        left, right = 1, max(quantities)
        
        # Function to check if it's possible to distribute quantities such that no worker has more than `max_load`
        def canDistribute(max_load):
            workers = 0
            for q in quantities:
                workers += (q + max_load - 1) // max_load  # This is the same as math.ceil(q / max_load)
            return workers <= n
        
        # Perform binary search to find the smallest possible max load
        while left < right:
            mid = (left + right) // 2
            if canDistribute(mid):
                right = mid
            else:
                left = mid + 1
        
        return left

# Test the solution
if __name__ == "__main__":
    n = 6
    quantities = [11, 6]
    sol = Solution()
    print(sol.minimizedMaximum(n, quantities))
