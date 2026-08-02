"""
https://leetcode.com/problems/most-beautiful-item-for-each-query/?envType=daily-question&envId=2024-11-12
"""


from typing import List



class Solution:
    def maximumBeauty(self, items: List[List[int]], queries: List[int]) -> List[int]:
        items.sort()
        max_beauty = []
        max_so_far = 0

        for price, beauty in items:
            max_so_far = max(max_so_far, beauty)
            max_beauty.append((price, max_so_far))

        result = []
        for querry in queries:
            idx = bisect_right(max_beauty, (querry, float('inf'))) - 1
            if idx == -1:
                result.append(0)
            else:
                result.append(max_beauty[idx][1])
        return result        

        