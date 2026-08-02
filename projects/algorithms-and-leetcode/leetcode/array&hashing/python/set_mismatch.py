"""
https://leetcode.com/problems/set-mismatch/description/
"""

from typing import List, Dict

class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        nums = sorted(nums)
        #print(nums)
        missing = set([i for i in range(1, len(nums)+1)])
        #print(missing)
        for i in nums:
            if i in missing:
                #print(i)
                missing.remove(i)
            else:
                duplicate = i
                #print(duplicate)
                
        return [duplicate, missing.pop()]
        
        
        
        


if __name__ == "__main__":
    test = Solution()
    
    print(test.findErrorNums([1, 2, 2, 4]))