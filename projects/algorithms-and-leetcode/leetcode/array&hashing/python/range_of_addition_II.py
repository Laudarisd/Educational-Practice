"""
https://leetcode.com/problems/range-addition-ii/description/

You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return the number of maximum integers in the matrix after performing all the operations.

Approaches:
1. Brute Force: 
    - Initialize a matrix of size m x n with all zeros
    - For each operation, increment the values in the matrix
    - Find the maximum value in the matrix
    - Time complexity: O(m * n * len(ops))
    - Space complexity: O(m * n)

"""


from typing import List


class Solution:
    def maxCount(self, m: int, n: int, ops: List[List[int]]) -> int:
        for op in ops:
            m = min(m, op[0]) # op[o] gives the row value
            n = min(n, op[1])# op[1] gives the column value
        return m * n