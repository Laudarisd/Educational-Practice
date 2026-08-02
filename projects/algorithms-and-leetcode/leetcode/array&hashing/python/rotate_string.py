"""
Problem: https://leetcode.com/submissions/detail/1441700226/

"""

from typing import List, Dict, str


class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        if len(s) != len(goal):
            return False
        # Concatenate s with itself

        double_s = s + s
        print(double_s)

        return goal in double_s
