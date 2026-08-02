"""
Question:https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/?envType=daily-question&envId=2024-10-19
"""

class Solution(object):
    def findKthBit(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: str
        """
        def reverse(s):
            return ''.join(['1' if c == '0' else '0' for c in s][::-1])
        
        def helper(n, k):
            if n == 1:
                return '0'
            mid = 2**(n-1)
            if k == mid:
                return '1'
            elif k < mid:
                return helper(n-1, k)
            else:
                return reverse(helper(n-1, 2**n-k))
        
        return helper(n, k)
    