"""
Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.
"""

from typing import List


class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        ans = cnt = 1
        for i, x in enumerate(nums[1:]):
            if nums[i] < x:
                cnt += 1
                ans = max(ans, cnt)
            else:
                cnt = 1
        return ans
    
    
    
    
if __name__ == "__main__":
    # example must be nums = [1,3,5,4,7], outout = 3
    nums = [1,3,5,4,7] # output = 4
    s = Solution()
    print(s.findLengthOfLCIS(nums))