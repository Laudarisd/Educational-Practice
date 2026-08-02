"""
Problem: https://leetcode.com/problems/plus-one/description/

"""
from typing import List, Tuple, Dict, Any

class Solution:
    def plusone(self, digits:List[int]) -> List[int]:
        num = int("".join(map(str, digits)))
        num +=1
        return [int(i) for i in str(num)
                ]