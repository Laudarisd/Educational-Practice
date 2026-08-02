"""
Problem: https://leetcode.com/problems/convert-1d-array-into-2d-array/description/
"""

from typing import List


class Solution:
    def construct2DArray(self, original: List[int], m: int, n: int) -> List[List[int]]:
        if m * n != len(original):
            return []
        result = []
        for i in range(0, len(original), n):
            print(original[i])
            print(f" Check : {original[i:i+n]}")
            result.append(original[i:i+n])

        return result
    


if __name__ == '__main__':
    run = Solution()
    print(run.construct2DArray([1,2,3,4], 2, 2))  # [[1,2],[3,4]]
    print(run.construct2DArray([1,2,3], 1, 3))  # [[1,2,3]]
