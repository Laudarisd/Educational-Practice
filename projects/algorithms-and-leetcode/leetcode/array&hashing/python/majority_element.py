"""
Problem: https://leetcode.com/problems/majority-element/description/
"""

from typing import List

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        # Sort the list
        nums.sort()
        # return the middle element because it gives us majority element
        print(len(nums))
        print("###########################")
        
        print(len(nums) // 2)
        
        return nums[len(nums) // 2]
    

    
    
    
if __name__ == "__main__":
    sol = Solution()
    print(sol.majorityElement([3, 2, 3]))  # 3
    #print(sol.majorityElement([2, 2, 1, 1, 1, 2, 2]))  # 2
    