"""
https://leetcode.com/problems/minimum-index-sum-of-two-lists/description/
"""


from typing import List


class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
        common_str = set(list1) & set(list2) # set gives unique elements and & gives common elements
        index_sum = {}
        
        for index, elem in enumerate(list1):
            if elem in common_str:
                index_sum[elem] = index # Store the index of the element in list1
        for index, elem in enumerate(list2):
            if elem in common_str:
                index_sum[elem] += index # Add the index of the element in list2
                
        min_sum = min(index_sum.values())

        return [key for key, value in index_sum.items() if value == min_sum] # Return the keys with the minimum sum        
        
        
        

