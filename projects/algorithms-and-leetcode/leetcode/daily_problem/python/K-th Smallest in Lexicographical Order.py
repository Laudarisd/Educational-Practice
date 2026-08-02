"""
Given two integers n and k, return the kth lexicographically smallest integer in the range [1, n]
"""

class Solution:
    def findKthNumber(self, n: int, k: int) -> int:
        # Define funtion to count numbers with given prefix
        def count_steps(prefix: int, n: int) -> int:
            count = 0
            curr = prefix # Current prefix at current depth
            next_prefix = prefix + 1
            while curr <= n:
                count += min(n + 1, next_prefix) - curr
                curr *= 10
                next_prefix *= 10
            return count

        curr = 1
        k = k - 1

        while k > 0:
            steps = count_steps(curr, n)
            if steps <= k:
                k -= steps
                curr += 1
            else:
                k -= 1
                curr *= 10
        return curr

    
            
        