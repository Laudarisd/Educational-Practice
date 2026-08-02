"""
https://leetcode.com/problems/longest-harmonious-subsequence/description/

"""


from typing import List


class Solution:
    def findHS(self, nums: List[int]) -> int:
        freq = {}
        for num in nums:
            if num in freq:
                freq[num] += 1
            else:
                freq[num] = 1
        max_length = 0
        for num in freq:
            if num + 1 in freq:
                max_length = max(max_length, freq[num] + freq[num + 1])
        return max_length
    
    
sol = Solution()
print(sol.findHS([1, 3, 2, 2, 5, 2, 3, 7]))  # 5

print(sol.findHS([1,2,3,4]))  # 2
