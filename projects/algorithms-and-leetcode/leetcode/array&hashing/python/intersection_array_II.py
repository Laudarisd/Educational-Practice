"""
Problem: https://leetcode.com/problems/intersection-of-two-arrays-ii/
"""
from typing import List
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        from collections import Counter
        c1, c2 = Counter(nums1), Counter(nums2)
        res = []
        for k, v in c1.items():
            if k in c2:
                res.extend([k] * min(v, c2[k]))
        return res
    


# Another solution

from typing import List
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        from collections import Counter
        c1, c2 = Counter(nums1), Counter(nums2)
        return list((c1 & c2).elements())
    

# Another solution

from typing import List

